import { chromium, firefox, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

async function globalSetup(config: FullConfig) {
    // Chromium
    const browserChromium = await chromium.launch();
    const contextChromium = await browserChromium.newContext();
    const pageChromium = await contextChromium.newPage();

    await pageChromium.goto('https://www.saucedemo.com/');
    await pageChromium.fill('[data-test="username"]', process.env.SAUCEDEMO_USER!);
    await pageChromium.fill('[data-test="password"]', process.env.SAUCEDEMO_PASS!);
    await pageChromium.click('[data-test="login-button"]');

    await contextChromium.storageState({ path: 'storageState-chromium.json' });
    await browserChromium.close();

    // Firefox
    const browserFirefox = await firefox.launch();
    const contextFirefox = await browserFirefox.newContext();
    const pageFirefox = await contextFirefox.newPage();

    await pageFirefox.goto('https://www.saucedemo.com/');
    await pageFirefox.fill('[data-test="username"]', process.env.SAUCEDEMO_USER!);
    await pageFirefox.fill('[data-test="password"]', process.env.SAUCEDEMO_PASS!);
    await pageFirefox.click('[data-test="login-button"]');

    await contextFirefox.storageState({ path: 'storageState-firefox.json' });
    await browserFirefox.close();
    }

export default globalSetup;
