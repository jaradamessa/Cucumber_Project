package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TechfiosDefinition {

	//Given User is on techfios login page
	
	@Given ("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		System.out.println("Given User is on techfios login page");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		System.out.println("When User enters username as demo@techfios.com");
	}
	
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("When User enters password as \"abc123\"");
	}
	
	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		System.out.println("When User clicks on signin button"); 
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
	  System.out.println("ThenUser should land on dashboard page");
	}


}

