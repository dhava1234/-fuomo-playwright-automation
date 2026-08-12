import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly logo: Locator;
  readonly navigation: Locator;
  readonly whatsHotLink: Locator;
  readonly findCreatorsLink: Locator;
  readonly findStoreLink: Locator;
  readonly blogLink: Locator;

  readonly heroSection: Locator;
  readonly creatorSpotlight: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.getByAltText('FUOMO').first();

    this.navigation = page.locator('header');

    this.whatsHotLink = page.getByRole('link', {
      name: "What's Hot",
    });

    this.findCreatorsLink = page.getByRole('link', {
      name: 'Find Creators',
    });

    this.findStoreLink = page.getByRole('link', {
      name: 'Find Store',
    });

    this.blogLink = page.getByRole('link', {
      name: 'Blog',
    });

    this.heroSection = page.locator('main, section').first();

    this.creatorSpotlight = page.getByRole('heading', {
      name: 'Get Inspired by FUOMO Creators',
    });

    this.footer = page.locator('footer');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}