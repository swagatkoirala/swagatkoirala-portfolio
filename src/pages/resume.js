import React from 'react';

const Resume = () => {
    return (
        <body>
            <div className="cover">
                <h1>Azure Certification Study Guide</h1>
                <p>A Comprehensive Guide for Azure Service Preparation</p>
                <p>December 2024</p>
            </div>

            <div className="question">
                <h2>Question 2: Cost Configuration</h2>
                <p>Which configuration would yield the lowest costs?</p>
                <div className="options">
                    <ul>
                        <li>Region: Canada East, Operating System: Linux, Tier: Basic</li>
                        <li>Region: Canada East, Operating System: Windows, Tier: Low Priority</li>
                        <li>Region: US DOD East, Operating System: Windows, Tier: Standard</li>
                        <li>Region: US DOD East, Operating System: Linux, Tier: Basic</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Region: Canada East, Operating System: Linux, Tier: Basic
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Linux operating systems generally have lower licensing costs than Windows</li>
                        <li>Basic tier is more cost-effective compared to Standard tier</li>
                        <li>Canada East typically has lower pricing compared to US DOD regions</li>
                        <li>Basic tier is suitable for development and testing scenarios</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 3: Azure Hybrid Benefit</h2>
                <p>Seneca has hired you to move some on-premises virtual machines to Azure. These virtual machines are running licensed software which is licensed by Seneca's Microsoft Software Assurance agreement. Which of the following could be leveraged to reduce the cost of the Azure virtual machines?</p>
                <div className="options">
                    <ul>
                        <li>Deploying virtual machines on an Azure Dedicated Host</li>
                        <li>Ensuring the virtual machines are deployed in different fault and update domains</li>
                        <li>Enabling Azure Hybrid Benefit</li>
                        <li>Creating virtual machines using Azure Resource Management templates</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Enabling Azure Hybrid Benefit
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Helps leverage existing on-premises Windows Server and SQL Server licenses</li>
                        <li>Saves up to 40% on Windows Server VMs</li>
                        <li>Saves up to 55% on SQL Server VMs</li>
                        <li>Ideal for organizations migrating to Azure</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 4: High Availability Configuration</h2>
                <p>Seneca is running one instance of a webserver virtual machine on Azure within the Canada East region. To ensure Seneca has an SLA of 99.99% availability, which of the following solutions would you choose while keeping costs low?</p>
                <div className="options">
                    <ul>
                        <li>Install another 2 virtual machine instances in the same availability set</li>
                        <li>Install another virtual machine instance in the same availability zone within the same region</li>
                        <li>Install another virtual machine instance in the same availability set</li>
                        <li>Install another 2 virtual machines in different availability zones within the same region</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Install another 2 virtual machines in different availability zones within the same region
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Availability Zones provide better protection against datacenter failures</li>
                        <li>Multiple availability zones ensure 99.99% SLA</li>
                        <li>Provides better disaster recovery capabilities</li>
                        <li>Protects against entire datacenter failures</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 5: Cost Analysis Tool</h2>
                <p>Seneca has hired you to determine the cost savings of running web services on Azure cloud instead of on-premise. Which tool would you use to help you make this comparison?</p>
                <div className="options">
                    <ul>
                        <li>Azure Pricing Calculator</li>
                        <li>Azure On-Premise Tool</li>
                        <li>Total Cost of Ownership (TCO) calculator</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Total Cost of Ownership (TCO) calculator
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Specifically designed to compare on-premises vs. Azure costs</li>
                        <li>Considers hardware, software, operations, and facilities costs</li>
                        <li>Provides detailed reports showing potential savings</li>
                        <li>Helps make informed decisions about cloud migration</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 6: Public Preview Purpose</h2>
                <p>You are working with Azure and notice an Azure feature which is in public preview. According to Microsoft's supplemental terms, what is the purpose of public preview?</p>

                <div className="options">
                    <ul>
                        <li>To provide full support for any issues experienced with the feature</li>
                        <li>A new method of migrating data to Azure</li>
                        <li>To prepare the feature for private preview</li>
                        <li>To obtain customer feedback</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: To obtain customer feedback
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Allows Microsoft to gather real-world usage data</li>
                        <li>Enables testing of features before general availability</li>
                        <li>Helps improve features based on user experience</li>
                        <li>Identifies potential issues before full release</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 7: Cost Reduction for Long-term Usage</h2>
                <p>You are working with Seneca to lower the costs of using Azure. During your discussions, you both determine that virtual machines will be needed for the next 3 years. Which of the following would provide the greatest savings?</p>

                <div className="options">
                    <ul>
                        <li>Cost Management</li>
                        <li>Azure Spending Limits</li>
                        <li>Azure Reservations</li>
                        <li>Azure Pricing Calculator</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure Reservations
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides significant discounts for 1-3 year commitments</li>
                        <li>Offers up to 72% savings compared to pay-as-you-go</li>
                        <li>Perfect for predictable, long-term workloads</li>
                        <li>Best cost optimization for extended usage</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 8: IoT Data Analysis</h2>
                <p>Seneca uses several IoT devices on their campuses to gather data about the environment. Which solution would you recommend to analyze the large volume of data being collected from the IoT devices?</p>

                <div className="options">
                    <ul>
                        <li>Machine Learning Service</li>
                        <li>HDInsight</li>
                        <li>Data Lake Analytics</li>
                        <li>Application Insights</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Data Lake Analytics
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Designed for processing massive amounts of data</li>
                        <li>Supports complex queries and big data analysis</li>
                        <li>Seamlessly integrates with IoT data sources</li>
                        <li>Provides scalable analytics capabilities</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 9: Development Environment</h2>
                <p>Seneca's school of SDDS is developing and testing a new application for student enrollment. The team requires up to 100 virtual machines which can be deployed and removed periodically. The virtual machines operate on both Windows and Linux operating systems. Which solution would you recommend to the school of SDDS?</p>

                <div className="options">
                    <ul>
                        <li>Azure Boards</li>
                        <li>Azure Pipelines</li>
                        <li>Azure Blueprints</li>
                        <li>Azure DevTest Labs</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure DevTest Labs
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides managed VM environments for development/testing</li>
                        <li>Supports both Windows and Linux VMs</li>
                        <li>Enables easy creation and cleanup of environments</li>
                        <li>Includes built-in cost control features</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 11: Azure Databricks</h2>
                <p>Seneca's school of SDDS is interested in Azure Databricks. Which of the following would you use to describe this service?</p>

                <div className="options">
                    <ul>
                        <li>A table storage solution which supports key-pair values</li>
                        <li>A method of implementing code which executes when triggered by an event</li>
                        <li>An Apache Spark-based analytics platform</li>
                        <li>A non-relational storage which supports different storage formats</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: An Apache Spark-based analytics platform
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Built on Apache Spark for powerful analytics</li>
                        <li>Provides collaborative analytics capabilities</li>
                        <li>Supports big data processing and machine learning</li>
                        <li>Integrates with other Azure services</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 12: Azure Portal Interface</h2>
                <p>You are a lab assistant for Seneca's ITAS programs and the students are learning how to use Azure portal. What of the following would you use to describe the collection of customizable tiles displayed in the portal?</p>

                <div className="options">
                    <ul>
                        <li>Dashboard</li>
                        <li>Flyout</li>
                        <li>Tiles</li>
                        <li>Blade</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Dashboard
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Represents the customizable home page in Azure portal</li>
                        <li>Allows organization of resource tiles</li>
                        <li>Provides personalized monitoring view</li>
                        <li>Supports sharing with other users</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 13: Service Availability Monitoring</h2>
                <p>After implementing a web app in Azure, you want to know how often this service has been unavailable. Which solution would you use?</p>

                <div className="options">
                    <ul>
                        <li>Health advisories</li>
                        <li>Health history</li>
                        <li>Service issues</li>
                        <li>Health alerts</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Health history
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides historical service availability data</li>
                        <li>Tracks past incidents and downtime</li>
                        <li>Shows service reliability patterns</li>
                        <li>Helps understand performance trends</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 14: Azure PowerShell</h2>
                <p>You are a lab assistant for Seneca's ITAS programs and the students are asking you to describe Azure Powershell. Which of the statements would you use to describe this service?</p>

                <div className="options">
                    <ul>
                        <li>Used in Azure Resource Manager templates</li>
                        <li>Used to create scripts to automate Azure management tasks</li>
                        <li>Used in a browser in the Azure Cloud Shell</li>
                        <li>Used to manage Azure virtual machines running Windows operating systems only</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Used to create scripts to automate Azure management tasks
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides cmdlets for Azure resource management</li>
                        <li>Enables automation of complex tasks</li>
                        <li>Works with both Windows and Linux resources</li>
                        <li>Supports interactive</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 15: Azure Security Center Features</h2>
                <p>Seneca has deployed some virtual machines in Azure and would like to know more information about Azure Security Center. Which of the following would you share with Seneca?</p>

                <div className="options">
                    <ul>
                        <li>Azure Security Center provides monitoring, security recommendations, and advanced threat protection for both cloud and on-premises virtual machines</li>
                        <li>Azure Security Center automatically discovers and assesses security for Azure resources as they are deployed</li>
                        <li>Azure Security Center supports only Windows operating systems</li>
                        <li>Azure Security Center provides native integration with Windows Defender</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure Security Center provides monitoring, security recommendations, and advanced threat protection for both cloud and on-premises virtual machines
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides comprehensive security monitoring across cloud and on-premises</li>
                        <li>Offers advanced threat protection capabilities</li>
                        <li>Supports multiple operating systems, not just Windows</li>
                        <li>Delivers actionable security recommendations</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 16: SSL/TLS Certificate Management</h2>
                <p>Which of the following security solutions could help you provision, manage, and deploy Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates?</p>

                <div className="options">
                    <ul>
                        <li>Azure Defender</li>
                        <li>Azure Information Protection (AIP)</li>
                        <li>Azure Key Vault</li>
                        <li>Azure Security Center</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure Key Vault
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Centrally manages certificates, keys, and secrets</li>
                        <li>Provides secure storage for SSL/TLS certificates</li>
                        <li>Supports complete certificate lifecycle management</li>
                        <li>Integrates with other Azure services for certificate deployment</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 17: Azure Dedicated Hosts</h2>
                <p>Seneca is considering adopting Azure Dedicated Hosts. What are some characteristics of this service?</p>

                <div className="options">
                    <ul>
                        <li>Virtual machines created on the provided physical server are charged based on number of virtual machines</li>
                        <li>A provided physical server is dedicated to Seneca's workload only</li>
                        <li>The provided physical server can only support Microsoft operating systems</li>
                        <li>The provided physical server cannot span across different Azure subscriptions</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: A provided physical server is dedicated to Seneca's workload only
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides exclusive use of physical servers</li>
                        <li>Ensures complete workload isolation</li>
                        <li>Helps meet specific compliance requirements</li>
                        <li>Offers greater control over infrastructure</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 18: Regulatory Compliance Dashboard</h2>
                <p>Azure's Security Center provides a Regulatory Compliance dashboard which provides which of the following insights?</p>

                <div className="options">
                    <ul>
                        <li>Overall compliance score</li>
                        <li>The total assessments which pass or fail</li>
                        <li>Recommendations for reported threats</li>
                        <li>Ranking of security alerts</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Overall compliance score AND The total assessments which pass or fail
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides comprehensive compliance scoring</li>
                        <li>Shows detailed pass/fail assessment results</li>
                        <li>Tracks compliance status across resources</li>
                        <li>Helps monitor compliance improvements over time</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 19: Network Traffic Control</h2>
                <p>Seneca has different subscriptions and would like to restrict network traffic between these subscriptions. Which service would you recommend?</p>

                <div className="options">
                    <ul>
                        <li>Azure Firewall</li>
                        <li>Azure Application Gateway</li>
                        <li>Azure Distributed Denial of Service (DDoS) protection</li>
                        <li>Azure Network Security Group</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure Firewall
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides centralized network security management</li>
                        <li>Can control traffic between different subscriptions</li>
                        <li>Offers advanced threat protection features</li>
                        <li>Supports complex filtering rules across subscriptions</li>
                    </ul>
                </div>
            </div>

            <div className="question">
                <h2>Question 20: Security Recommendations</h2>
                <p>Seneca's Azure account has several resources deployed. Which of the following Azure security solutions provides security recommendations and remediations to secure the resources?</p>

                <div className="options">
                    <ul>
                        <li>Azure Key Vault</li>
                        <li>Azure Information Protection (AIP)</li>
                        <li>Azure DDoS Protection Standard</li>
                        <li>Azure Security Center</li>
                    </ul>
                </div>

                <div className="correct-answer">
                    Correct Answer: Azure Security Center
                </div>

                <div className="explanation">
                    <strong>Explanation:</strong>
                    <ul>
                        <li>Provides continuous security assessment</li>
                        <li>Offers actionable security recommendations</li>
                        <li>Includes detailed remediation guidance</li>
                        <li>Monitors security posture across all resources</li>
                    </ul>
                </div>
            </div>

            <style>
                {`
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #0078D4;
            text-align: center;
            padding-bottom: 10px;
            border-bottom: 2px solid #0078D4;
          }
          h2 {
            color: #0078D4;
            margin-top: 30px;
            padding: 10px;
            background-color: #f0f8ff;
            border-radius: 5px;
          }
          .question {
            margin-bottom: 30px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: left;
            font-size: medium;
          }
          .options {
            margin-left: 20px;
          }
          .correct-answer {
            color: #107C10;
            font-weight: bold;
            margin: 10px 0;
            padding: 10px;
            background-color: #f0fff0;
            border-radius: 5px;
          }
          .explanation {
            margin-top: 10px;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 4px solid #0078D4;
          }
          ul {
            margin-left: 20px;
          }
          .cover {
            text-align: center;
            margin: 50px 0;
          }
          .cover h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          .cover p {
            font-size: 1.2em;
            color: #666;
          }
        `}
            </style>
        </body>
    );
};

export default Resume;