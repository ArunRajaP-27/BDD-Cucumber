package StepDefinitions;

import static org.testng.Assert.assertEquals;

import java.io.File;
import java.util.Collections;
import org.apache.commons.io.FileUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import base.baseClass;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepOne extends baseClass {

	@Before
	public void browser_cofig() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\drivers\\chromedriver_win32\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.setExperimentalOption("useAutomationExtension", false);
		options.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
	}

	@After
	public void close_browser() {
		driver.quit();
	}


	@Given("^user in on amazon homepage$")
	public void user_in_on_amazon_homepage() {
		driver.get("https://www.amazon.com");
		verifyTitle("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more");
	}

	@When("^user searches \"(.*)\"$")
	public void user_searches_searchKey(String searchKey) {
		WebElement searchBox = findElement("//input[@id='twotabsearchtextbox']");
		searchBox.sendKeys(searchKey);
		WebElement searchButton = findElement("//input[@id='nav-search-submit-button']");
		click(searchButton);
	}

	@And("^verify page \"(.*)\"$")
	public void verify_page(String pageTitle) {
		verifyTitle(pageTitle);
	}

	@Then("^click first image$")
	public void click_first_image() {
		WebElement img = findElement("//span[contains(text(),'A Woman of No Importance')]");
		click(img);
	}

	@And("^take screenshot$")
	public void take_screenshot() {
		String fileWithPath = System.getProperty("user.dir") + "\\test-output\\ss1.png";
		try {
			takeScreenshot(driver, fileWithPath);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to take screenshot ");
		}
	}
}
