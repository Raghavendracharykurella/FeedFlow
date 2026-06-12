from selenium import webdriver

def test_login_instagram():
    driver = webdriver.Chrome()
    driver.get("https://www.instagram.com")
    assert "Instagram" in driver.title
    driver.quit()
