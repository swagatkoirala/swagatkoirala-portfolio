import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Cover Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4 pb-4 border-b-2 border-blue-600">
            Azure Certification Study Guide
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            A Comprehensive Guide for Azure Service Preparation
          </p>
          <p className="text-lg text-gray-500">December 2024</p>
        </div>

        {/* Questions */}
        {questions.map((question, index) => (
          <div key={index} className="mb-12 p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-bold text-blue-600 mb-4 p-3 bg-blue-50 rounded-md">
              Question {index + 2}: {question.title}
            </h2>
            
            <p className="mb-4">{question.question}</p>

            <div className="ml-6 mb-6">
              <ul className="list-disc space-y-2">
                {question.options.map((option, optIndex) => (
                  <li key={optIndex} className="text-gray-700">{option}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-md mb-4">
              <p className="font-bold text-green-700">
                Correct Answer: {question.correctAnswer}
              </p>
            </div>

            <div className="p-4 bg-gray-50 border-l-4 border-blue-600">
              <p className="font-bold mb-2">Explanation:</p>
              <ul className="list-disc ml-6 space-y-2">
                {question.explanation.map((point, expIndex) => (
                  <li key={expIndex} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Complete questions data
const questions = [
  {
    title: "Cost Configuration",
    question: "Which configuration would yield the lowest costs?",
    options: [
      "Region: Canada East, Operating System: Linux, Tier: Basic",
      "Region: Canada East, Operating System: Windows, Tier: Low Priority",
      "Region: US DOD East, Operating System: Windows, Tier: Standard",
      "Region: US DOD East, Operating System: Linux, Tier: Basic"
    ],
    correctAnswer: "Region: Canada East, Operating System: Linux, Tier: Basic",
    explanation: [
      "Linux operating systems generally have lower licensing costs than Windows",
      "Basic tier is more cost-effective compared to Standard tier",
      "Canada East typically has lower pricing compared to US DOD regions",
      "Basic tier is suitable for development and testing scenarios"
    ]
  },
  {
    title: "Azure Hybrid Benefit",
    question: "Seneca has hired you to move some on-premises virtual machines to Azure. These virtual machines are running licensed software which is licensed by Seneca's Microsoft Software Assurance agreement. Which of the following could be leveraged to reduce the cost of the Azure virtual machines?",
    options: [
      "Deploying virtual machines on an Azure Dedicated Host",
      "Ensuring the virtual machines are deployed in different fault and update domains",
      "Enabling Azure Hybrid Benefit",
      "Creating virtual machines using Azure Resource Management templates"
    ],
    correctAnswer: "Enabling Azure Hybrid Benefit",
    explanation: [
      "Helps leverage existing on-premises Windows Server and SQL Server licenses",
      "Saves up to 40% on Windows Server VMs",
      "Saves up to 55% on SQL Server VMs",
      "Ideal for organizations migrating to Azure"
    ]
  },
  {
    title: "High Availability Configuration",
    question: "Seneca is running one instance of a webserver virtual machine on Azure within the Canada East region. To ensure Seneca has an SLA of 99.99% availability, which of the following solutions would you choose while keeping costs low?",
    options: [
      "Install another 2 virtual machine instances in the same availability set",
      "Install another virtual machine instance in the same availability zone within the same region",
      "Install another virtual machine instance in the same availability set",
      "Install another 2 virtual machines in different availability zones within the same region"
    ],
    correctAnswer: "Install another 2 virtual machines in different availability zones within the same region",
    explanation: [
      "Availability Zones provide better protection against datacenter failures",
      "Multiple availability zones ensure 99.99% SLA",
      "Provides better disaster recovery capabilities",
      "Protects against entire datacenter failures"
    ]
  },
  {
    title: "Cost Analysis Tool",
    question: "Seneca has hired you to determine the cost savings of running web services on Azure cloud instead of on-premise. Which tool would you use to help you make this comparison?",
    options: [
      "Azure Pricing Calculator",
      "Azure On-Premise Tool",
      "Total Cost of Ownership (TCO) calculator"
    ],
    correctAnswer: "Total Cost of Ownership (TCO) calculator",
    explanation: [
      "Specifically designed to compare on-premises vs. Azure costs",
      "Considers hardware, software, operations, and facilities costs",
      "Provides detailed reports showing potential savings",
      "Helps make informed decisions about cloud migration"
    ]
  },
  {
    title: "Public Preview Purpose",
    question: "You are working with Azure and notice an Azure feature which is in public preview. According to Microsoft's supplemental terms, what is the purpose of public preview?",
    options: [
      "To provide full support for any issues experienced with the feature",
      "A new method of migrating data to Azure",
      "To prepare the feature for private preview",
      "To obtain customer feedback"
    ],
    correctAnswer: "To obtain customer feedback",
    explanation: [
      "Allows Microsoft to gather real-world usage data",
      "Enables testing of features before general availability",
      "Helps improve features based on user experience",
      "Identifies potential issues before full release"
    ]
  },
  {
    title: "Cost Reduction for Long-term Usage",
    question: "You are working with Seneca to lower the costs of using Azure. During your discussions, you both determine that virtual machines will be needed for the next 3 years. Which of the following would provide the greatest savings?",
    options: [
      "Cost Management",
      "Azure Spending Limits",
      "Azure Reservations",
      "Azure Pricing Calculator"
    ],
    correctAnswer: "Azure Reservations",
    explanation: [
      "Provides significant discounts for 1-3 year commitments",
      "Offers up to 72% savings compared to pay-as-you-go",
      "Perfect for predictable, long-term workloads",
      "Best cost optimization for extended usage"
    ]
  },
  {
    title: "IoT Data Analysis",
    question: "Seneca uses several IoT devices on their campuses to gather data about the environment. Which solution would you recommend to analyze the large volume of data being collected from the IoT devices?",
    options: [
      "Machine Learning Service",
      "HDInsight",
      "Data Lake Analytics",
      "Application Insights"
    ],
    correctAnswer: "Data Lake Analytics",
    explanation: [
      "Designed for processing massive amounts of data",
      "Supports complex queries and big data analysis",
      "Seamlessly integrates with IoT data sources",
      "Provides scalable analytics capabilities"
    ]
  },
  {
    title: "Development Environment",
    question: "Seneca's school of SDDS is developing and testing a new application for student enrollment. The team requires up to 100 virtual machines which can be deployed and removed periodically. The virtual machines operate on both Windows and Linux operating systems. Which solution would you recommend to the school of SDDS?",
    options: [
      "Azure Boards",
      "Azure Pipelines",
      "Azure Blueprints",
      "Azure DevTest Labs"
    ],
    correctAnswer: "Azure DevTest Labs",
    explanation: [
      "Provides managed VM environments for development/testing",
      "Supports both Windows and Linux VMs",
      "Enables easy creation and cleanup of environments",
      "Includes built-in cost control features"
    ]
  },
  {
    title: "Azure Databricks",
    question: "Seneca's school of SDDS is interested in Azure Databricks. Which of the following would you use to describe this service?",
    options: [
      "A table storage solution which supports key-pair values",
      "A method of implementing code which executes when triggered by an event",
      "An Apache Spark-based analytics platform",
      "A non-relational storage which supports different storage formats"
    ],
    correctAnswer: "An Apache Spark-based analytics platform",
    explanation: [
      "Built on Apache Spark for powerful analytics",
      "Provides collaborative analytics capabilities",
      "Supports big data processing and machine learning",
      "Integrates with other Azure services"
    ]
  },
  {
    title: "Azure Portal Interface",
    question: "You are a lab assistant for Seneca's ITAS programs and the students are learning how to use Azure portal. What of the following would you use to describe the collection of customizable tiles displayed in the portal?",
    options: [
      "Dashboard",
      "Flyout",
      "Tiles",
      "Blade"
    ],
    correctAnswer: "Dashboard",
    explanation: [
      "Represents the customizable home page in Azure portal",
      "Allows organization of resource tiles",
      "Provides personalized monitoring view",
      "Supports sharing with other users"
    ]
  },
  {
    title: "Service Availability Monitoring",
    question: "After implementing a web app in Azure, you want to know how often this service has been unavailable. Which solution would you use?",
    options: [
      "Health advisories",
      "Health history",
      "Service issues",
      "Health alerts"
    ],
    correctAnswer: "Health history",
    explanation: [
      "Provides historical service availability data",
      "Tracks past incidents and downtime",
      "Shows service reliability patterns",
      "Helps understand performance trends"
    ]
  },
  {
    title: "Azure PowerShell",
    question: "You are a lab assistant for Seneca's ITAS programs and the students are asking you to describe Azure Powershell. Which of the statements would you use to describe this service?",
    options: [
      "Used in Azure Resource Manager templates",
      "Used to create scripts to automate Azure management tasks",
      "Used in a browser in the Azure Cloud Shell",
      "Used to manage Azure virtual machines running Windows operating systems only"
    ],
    correctAnswer: "Used to create scripts to automate Azure management tasks",
    explanation: [
      "Provides cmdlets for Azure resource management",
      "Enables automation of complex tasks",
      "Works with both Windows and Linux resources",
      "Supports interactive and automated management"
    ]
  },
  {
    title: "Azure Security Center Features",
    question: "Seneca has deployed some virtual machines in Azure and would like to know more information about Azure Security Center. Which of the following would you share with Seneca?",
    options: [
      "Azure Security Center provides monitoring, security recommendations, and advanced threat protection for both cloud and on-premises virtual machines",
      "Azure Security Center automatically discovers and assesses security for Azure resources as they are deployed",
      "Azure Security Center supports only Windows operating systems",
      "Azure Security Center provides native integration with Windows Defender"
    ],
    correctAnswer: "Azure Security Center provides monitoring, security recommendations, and advanced threat protection for both cloud and on-premises virtual machines",
    explanation: [
      "Provides comprehensive security monitoring across cloud and on-premises",
      "Offers advanced threat protection capabilities",
      "Supports multiple operating systems, not just Windows",
      "Delivers actionable security recommendations"
    ]
  },
  {
    title: "SSL/TLS Certificate Management",
    question: "Which of the following security solutions could help you provision, manage, and deploy Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates?",
    options: [
      "Azure Defender",
      "Azure Information Protection (AIP)",
      "Azure Key Vault",
      "Azure Security Center"
    ],
    correctAnswer: "Azure Key Vault",
    explanation: [
      "Centrally manages certificates, keys, and secrets",
      "Provides secure storage for SSL/TLS certificates",
      "Supports complete certificate lifecycle management",
      "Integrates with other Azure services for certificate deployment"
    ]
  },
  {
    title: "Azure Dedicated Hosts",
    question: "Seneca is considering adopting Azure Dedicated Hosts. What are some characteristics of this service?",
    options: [
      "Virtual machines created on the provided physical server are charged based on number of virtual machines",
      "A provided physical server is dedicated to Seneca's workload only",
      "The provided physical server can only support Microsoft operating systems",
      "The provided physical server cannot span across different Azure subscriptions"
    ],
    correctAnswer: "A provided physical server is dedicated to Seneca's workload only",
    explanation: [
      "Provides exclusive use of physical servers",
      "Ensures complete workload isolation",
      "Helps meet specific compliance requirements",
      "Offers greater control over infrastructure"
    ]
  },
  {
    title: "Network Traffic Control",
    question: "Seneca has different subscriptions and would like to restrict network traffic between these subscriptions. Which service would you recommend?",
    options: [
      "Azure Firewall",
      "Azure Application Gateway",
      "Azure Distributed Denial of Service (DDoS) protection",
      "Azure Network Security Group"
    ],
    correctAnswer: "Azure Firewall",
    explanation: [
      "Provides centralized network security management",
      "Can control traffic between different subscriptions",
      "Offers advanced threat protection features",
      "Supports complex filtering rules across subscriptions"
    ]
  },
  {
    title: "Security Recommendations",
    question: "Seneca's Azure account has several resources deployed. Which of the following Azure security solutions provides security recommendations and remediations to secure the resources?",
    options: [
      "Azure Key Vault",
      "Azure Information Protection (AIP)",
      "Azure DDoS Protection Standard",
      "Azure Security Center"
    ],
    correctAnswer: "Azure Security Center",
    explanation: [
      "Provides continuous security assessment",
      "Offers actionable security recommendations",
      "Includes detailed remediation guidance",
      "Monitors security posture across all resources"
    ]
  }
];