Feature: Opening Amazon 


Scenario Outline: Searching rocking horse 
	Given user in on amazon homepage 
	When user searches "<searchKey>" 
	And verify page "<pageTitle>" 
	
	Examples: 
		|searchKey				|pageTitle							|
		|Best novels			|Amazon.com : Best novels			|
		|Wooden rocking horse	|Amazon.com : Wooden rocking horse	|
		|Redmi 5a				|Amazon.com : Redmi 5a				|
		|Grocery				|Amazon.com : Grocery				|
		
		
Scenario Outline: Screenshoting best novel 
	Given user in on amazon homepage 
	When user searches "<searchKey>" 
	And verify page "<pageTitle>" 
	Then click first image 
	And take screenshot 
	
	
	Examples: 
		|searchKey		|pageTitle					|
		|Best novels	|Amazon.com : Best novels	|
