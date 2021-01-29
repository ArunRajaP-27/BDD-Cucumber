package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\853253\\eclipse-workspace()\\sampleMaven\\src\\main\\java\\Features\\amazon.feature",
		glue = {"StepDefinitions"},
		format= {"pretty","html:test-output"},
		dryRun = false,
//		dryRun = true,
		monochrome = true
		)

public class TestRunner {

}
