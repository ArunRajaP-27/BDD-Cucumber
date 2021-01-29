package base;

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

public class baseClass {

	public WebDriver driver;
	
	public void browser_cofig() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\drivers\\chromedriver_win32\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.setExperimentalOption("useAutomationExtension", false);
		options.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
	}
	
	public void verifyTitle(String expected) {
		String actual = driver.getTitle();
		assertEquals(actual, expected);
	}
	
	public void click(WebElement webElement) {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", webElement);
	}

	public WebElement findElement(String xpath) {
		WebElement webElement = driver.findElement(By.xpath(xpath));
		return webElement;
	}

	public static void takeScreenshot (WebDriver driver, String fileWithPath) throws Exception {
		TakesScreenshot scrShot = ((TakesScreenshot) driver);
		File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);
		File DestFile = new File(fileWithPath);
		FileUtils.copyFile(SrcFile, DestFile);
	}
	
	public void close_browser() {
		driver.quit();
	}
	
}
