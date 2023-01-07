Feature: full flow Casso
  In order to achieve my goals
  As a persona
  I want to make full flow Casso

  Scenario: Check full flow Casso
    Given I login to Casso page
    And I go to create new company page
    And I create a new company
    And I edit company to "K19406 - GROUP 6"
    And I add new member "thaovtt19406@st.uel.edu.vn"
    And I delete member "thaovtt19406@st.uel.edu.vn"
    And I add new bank "Vietcombank" "bankusrdemo1" "123456"
    And I update Bank information with "Bank K19406 GROUP 6" "123456789"
    And I search "" "THANH TOAN HOA DON SO HOA DON 0902612348 QUA TIMO" "" in finance Book
    And I delete card "Bank K19406 GROUP 6"
    And I delete company
    And I create API key
    And I edit API key
    And I delete API key
