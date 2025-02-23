**ScopeX Manual Test Plan**

**Table of Contents**

**1\. Objective**	

**2\. Scope**	

**3\. Test Approach**	

**4\. Test Environment**	

**5\. Risk Analysis**

**6\. Review and Approvals**

1. # **Objective**

* Validate core functionalities: User Registration, Adding Recipients, and Logout.  
* Ensure seamless user experience across mobile platforms.  
* Identify and document potential issues through exploratory testing.  
* Maintain consistent quality standards across all application components.

2. # **Scope**

**Modules Division:** 

**Mobile Application:** 

\- It includes different types of modules such as:

1. **User Registration Flow:**  
   * New user registration  
   * Field validations  
   * Success/Error scenarios (e.g., duplicate email handling, network errors)  
   * Dashboard redirection after successful registration  
2. **Recipient Management:**  
   * Add new recipient with required details (e.g., IFSC code, Bank account number)  
   * Recipient list display with filtering/search options if applicable  
   * Field validations for recipient details entry  
   * Success/Error scenarios during recipient addition or deletion  
3. **Logout Functionality:**  
   * Logout process initiation from various screens within the app  
   * Session management to ensure no data persists post logout  
   * Login screen redirection after logout completion

   

3. # **Test Approach**

   ### **Manual Testing Phase:**

1. **Test Scenarios Development:**  
   * Create detailed test scenarios for User Registration, Adding a Recipient, Logout based on acceptance criteria.  
   * Prepare comprehensive test data sets covering various valid and invalid inputs.  
   * Document expected results for each scenario to ensure clarity on pass/fail conditions.

2. **Execution Strategy:**  
   * Conduct smoke testing to verify basic functionality works as expected before deeper testing.  
   * Perform functional testing focusing on each module's core features and edge cases.  
   * Execute cross-browser compatibility tests if applicable; however, since this is a mobile app focus will be more on device variations rather than browsers.  
   * Perform exploratory testing to uncover issues not caught by scripted tests.

3. **Additional Considerations:**  
   * Identify assumptions about system behavior that may impact test outcomes.  
   * Document risks such as dependency on external services or unstable development environments that could hinder effective testing.  
   * Highlight constraints like limited access to certain devices or time constraints affecting thoroughness of tests.

   

     

     

     

   


4. # **Test Environment**

   **Android:**

* One Plus Nord CE2 5G  
* Android \- 13

### **Tools & Technologies:**

* Reporting Tool for Bugs: Google sheet  
* Test Scenarios: Google sheet  
* Automation Framework: Playwright  
* Programming Languages Used in Automation Scripts : JavaScript, TypeScript  
* Version Control System Used by Development Team/Testing Team (if applicable): Git/GitHub

5. # **Risk Analysis**

* Prioritize all three modules—User Registration, Recipient Management, Logout—to ensure they function well under various conditions.  
* Ensure these modules remain stable throughout development phases by continuously verifying their functionality against changing requirements or updates.  
* Verify every bug fix thoroughly before marking it resolved by developers.  
* If a module is under active development or implementation phase:  
  Utilize available time efficiently by focusing more intensely on other stable modules where improvements can be made without waiting for dependencies from ongoing work streams.  
* Consider setting up a separate QA environment that mirrors production-like stability better than developer environments typically do.  
* This helps catch integration-level issues early while maintaining faster feedback loops between QA teams and developers working together closely within agile methodologies adopted widely today across tech industries worldwide\!

6. # **Review and Approvals**

This initial part of our comprehensive Test Strategy may evolve over time based on changes in requirements or lessons learned during execution phases where necessary adjustments are identified either internally among team members discussing challenges faced so far at regular intervals set aside specifically addressing them proactively whenever possible\!

