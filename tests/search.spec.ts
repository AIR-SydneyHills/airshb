import { expect, test } from '@playwright/test'

test.describe('Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should open search modal when typing in search box', async ({ page }) => {
    const searchBox = page.locator('#search-box')
    await searchBox.click() // trigger focus/init
    await searchBox.fill('retirement')

    const searchPanel = page.locator('#search-panel')
    await expect(searchPanel).toBeVisible()

    const searchTitle = page.locator('#search-title')
    await expect(searchTitle).toContainText("Search results for 'retirement'")
  })

  test('should show results for a common term', async ({ page }) => {
    const searchBox = page.locator('#search-box')
    await searchBox.click()
    await searchBox.fill('meeting')

    const resultsContainer = page.locator('#search-results ul')
    // Wait for results to be populated (FlexSearch is async)
    await expect(resultsContainer.locator('li')).not.toHaveCount(0)
  })

  test('should close search modal when clearing search box', async ({ page }) => {
    const searchBox = page.locator('#search-box')
    await searchBox.click()
    await searchBox.fill('retirement')

    const searchPanel = page.locator('#search-panel')
    await expect(searchPanel).toBeVisible()

    await searchBox.fill('')
    await expect(searchPanel).not.toBeVisible()
  })

  test('should close search modal when clicking close button', async ({ page }) => {
    const searchBox = page.locator('#search-box')
    await searchBox.click()
    await searchBox.fill('retirement')

    const searchPanel = page.locator('#search-panel')
    await expect(searchPanel).toBeVisible()

    const closeBtn = page.locator('#search-close')
    await closeBtn.click()

    await expect(searchPanel).not.toBeVisible()
  })
})
