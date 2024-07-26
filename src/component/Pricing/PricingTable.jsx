import { Table, Button, Row, Col, Card } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { BiCheck, BiCheckbox, BiCheckboxSquare, BiCross, BiCrosshair } from 'react-icons/bi';
import { IoIosInfinite } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

const pricingData = [
    {
        "key": 1,
        "pricingModel": "Trial",
        "botExecution": "Upto 7000",
        "cloudPlatformAndKubernetesAccountIntegration": 2,
        "threatIntelligenceToolsIntegrationForEnrichment": "Unlimited",
        "threatDetectionToolsIntegration": "Unlimited",
        "externalAttackSurfaceToolIntegration": "Unlimited",
        "vulnerabilityDetectionToolsIntegration": "Unlimited",
        "siemIntegrations": "Unlimited",
        "observabilityToolIntegration": "Unlimited",
        "developerToolsIntegration": "Unlimited",
        "uptimeMonitoringToolsIntegration": "Unlimited",
        "notificationsAndCollaborationToolsIntegration": "Unlimited",
        "secretsDetectionAndCredentialsCompromiseDetectionToolIntegration": "Unlimited",
        "systemAdministrationToolIntegration": "Unlimited",
        "ticketingToolIntegration": "Unlimited",
        "workspaceDeploymentOption": "No",
        "complianceInsightForAutomationTaskMining": "Yes",
        "inventoryObservability": "Yes",
        "openAIIntegration": "Yes",
        "amazonBedrockIntegration": "Yes",
        "customLocalModels": "No",
        "autobotAiSupport": "No",
        "basicAutomationSupportAnually": 0,
        "enterpriseAutomationSupport": "Unlimited (Contact US)",
        "price": "Free Trial"
    },
    {
        "key": 2,
        "pricingModel": "Starter",
        "botExecution": "Upto 7000",
        "cloudPlatformAndKubernetesAccountIntegration": 2,
        "threatIntelligenceToolsIntegrationForEnrichment": "Unlimited",
        "threatDetectionToolsIntegration": "Unlimited",
        "externalAttackSurfaceToolIntegration": "Unlimited",
        "vulnerabilityDetectionToolsIntegration": "Unlimited",
        "siemIntegrations": "Unlimited",
        "observabilityToolIntegration": "Unlimited",
        "developerToolsIntegration": "Unlimited",
        "uptimeMonitoringToolsIntegration": "Unlimited",
        "notificationsAndCollaborationToolsIntegration": "Unlimited",
        "secretsDetectionAndCredentialsCompromiseDetectionToolIntegration": "Unlimited",
        "systemAdministrationToolIntegration": "Unlimited",
        "ticketingToolIntegration": "Unlimited",
        "workspaceDeploymentOption": "No",
        "complianceInsightForAutomationTaskMining": "Yes",
        "inventoryObservability": "Yes",
        "openAIIntegration": "Yes",
        "amazonBedrockIntegration": "Yes",
        "customLocalModels": "No",
        "autobotAiSupport": "Yes",
        "basicAutomationSupportAnually": 3,
        "enterpriseAutomationSupport": "Unlimited (Contact US)",
        "price": "$500 / Month"
    },
    {
        "key": 3,
        "pricingModel": "Standard",
        "botExecution": "Upto 20000",
        "cloudPlatformAndKubernetesAccountIntegration": 5,
        "threatIntelligenceToolsIntegrationForEnrichment": "Unlimited",
        "threatDetectionToolsIntegration": "Unlimited",
        "externalAttackSurfaceToolIntegration": "Unlimited",
        "vulnerabilityDetectionToolsIntegration": "Unlimited",
        "siemIntegrations": "Unlimited",
        "observabilityToolIntegration": "Unlimited",
        "developerToolsIntegration": "Unlimited",
        "uptimeMonitoringToolsIntegration": "Unlimited",
        "notificationsAndCollaborationToolsIntegration": "Unlimited",
        "secretsDetectionAndCredentialsCompromiseDetectionToolIntegration": "Unlimited",
        "systemAdministrationToolIntegration": "Unlimited",
        "ticketingToolIntegration": "Unlimited",
        "workspaceDeploymentOption": "No",
        "complianceInsightForAutomationTaskMining": "Yes",
        "inventoryObservability": "Yes",
        "openAIIntegration": "Yes",
        "amazonBedrockIntegration": "Yes",
        "customLocalModels": "No",
        "autobotAiSupport": "Yes",
        "basicAutomationSupportAnually": 5,
        "enterpriseAutomationSupport": "Unlimited (Contact US)",
        "price": "$1000 / Month"
    },
    {
        "key": 4,
        "pricingModel": "Enterprise",
        "botExecution": "Unlimited",
        "cloudPlatformAndKubernetesAccountIntegration": "Unlimited",
        "threatIntelligenceToolsIntegrationForEnrichment": "Unlimited",
        "threatDetectionToolsIntegration": "Unlimited",
        "externalAttackSurfaceToolIntegration": "Unlimited",
        "vulnerabilityDetectionToolsIntegration": "Unlimited",
        "siemIntegrations": "Unlimited",
        "observabilityToolIntegration": "Unlimited",
        "developerToolsIntegration": "Unlimited",
        "uptimeMonitoringToolsIntegration": "Unlimited",
        "notificationsAndCollaborationToolsIntegration": "Unlimited",
        "secretsDetectionAndCredentialsCompromiseDetectionToolIntegration": "Unlimited",
        "systemAdministrationToolIntegration": "Unlimited",
        "ticketingToolIntegration": "Unlimited",
        "workspaceDeploymentOption": "Yes",
        "complianceInsightForAutomationTaskMining": "Yes",
        "inventoryObservability": "Yes",
        "openAIIntegration": "Yes",
        "amazonBedrockIntegration": "Yes",
        "customLocalModels": "Yes",
        "autobotAiSupport": "Yes",
        "basicAutomationSupportAnually": 24,
        "enterpriseAutomationSupport": "Unlimited (Contact US)",
        "price": "$1500 / Month"
    }
]
    ;

const columns = [
    {
        title: 'Pack Name',
        dataIndex: 'pricingModel',
        key: 'pricingModel',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Bot Execution',
        dataIndex: 'botExecution',
        key: 'botExecution',
    },
    {
        title: 'Cloud Platform and Kubernetes Account Integration',
        dataIndex: 'cloudPlatformAndKubernetesAccountIntegration',
        key: 'cloudPlatformAndKubernetesAccountIntegration',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Button type="primary">Demo</Button>
        ),
    },
];
const getUniqueKeys = (data) => {
    const keys = new Set();
    data.forEach(item => {
        Object.keys(item).forEach(key => {
            if (key !== 'key' && key !== 'pricingModel' && key !== 'price') {
                keys.add(key);
            }
        });
    });
    return Array.from(keys);
};

const PricingTable = () => {
    const [isSticky, setIsSticky] = useState(false);
    const tableRef = useRef(null);
    const uniqueKeys = getUniqueKeys(pricingData);

    useEffect(() => {
        const handleScroll = () => {
            if (tableRef.current) {
                const rect = tableRef.current.getBoundingClientRect();
                const isTableVisible = rect.top <= 0 && rect.bottom >= 100;
                setIsSticky(isTableVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* <div className={`sticky top-0 z-10 bg-darkBg`}
                style={{
                    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)',
                    transition: '0.3s',
                    top: isSticky ? '4rem' : '-700px',
                    zIndex: 99999,
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 py-4">
                    <div className='flex items-end font-semibold text-2xl'>Features</div>
                    {pricingData.map(plan => (
                        <div key={plan.key} className="p-4 bg-blue-900/20 rounded-md text-center">
                            <p className="text-xl">{plan.pricingModel}</p>
                            <p className="text-2xl font-bold">{plan.price}</p>
                            <Button className="mt-4 w-full text-white">Demo</Button>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="block sm:hidden">
                {uniqueKeys.map(key => (
                    <div key={key} className="py-2 border-b border-gray-300">
                        <div className="font-semibold capitalize mb-2">{key.split(/(?=[A-Z])/).join(' ')}</div>
                        {pricingData.map(plan => (
                            <div key={plan.key} className="flex justify-between py-1">
                                <div>{plan.pricingModel}</div>
                                <div>
                                    {plan[key] === 'Yes' ? <BiCheck size={20} className='mx-auto' color='green' />
                                        : plan[key] === 'No' ? <IoCloseSharp size={20} className='mx-auto' color='red' />
                                            : plan[key] == '0' ? <IoCloseSharp size={20} className='mx-auto' color='red' />
                                                : plan[key]}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* <div className="block md:hidden">
                {uniqueKeys.map(key => (
                    <div key={key} className="py-2 border-b border-gray-300">
                        <div className="font-semibold capitalize  text-center mb-2">{key.split(/(?=[A-Z])/).join(' ')}</div>
                        <div className="grid grid-cols-2 text-sm text-center gap-3 place-content-center">
                            {pricingData.map(plan => (
                                <span key={plan.key} className="w-1/5 px-4 py-2 text-center font-normal">
                                    {plan[key] === 'Yes' ? <BiCheck size={20} className='mx-auto' color='green' /> : plan[key] === 'No' ? <IoCloseSharp size={20} className='mx-auto' color='red' /> : plan[key] === 0 ? <IoCloseSharp size={20} className='mx-auto' color='red' /> : plan[key]}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}

            <table ref={tableRef} className='hidden md:block table-fixed w-[100%]'>
                <thead className={`sticky top-0 z-10 bg-darkBg`}
                    style={{
                        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)',
                        transition: '0.3s',
                        top: isSticky ? '4rem' : '-700px',
                        zIndex: 99999,
                    }}>
                    <tr>
                        <td className='h-auto'>
                            <p className='-mb-20 text-4xl'>Features</p>
                        </td>
                        {pricingData.map(plan => (
                            <th key={plan.key} className="p-4  rounded-md text-center">
                                <p className="text-xl mb-4">{plan.pricingModel}</p>
                                {/* <p className="text-2xl font-bold">{plan.price}</p> */}
                                <div className=''>
                                    <Button className="w-full text-white">Demo</Button>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='border-ai-pink border-t'
                    style={{
                        paddingTop: '5rem',
                    }}
                >
                    {uniqueKeys.map(key => (
                        <tr key={key} style={{
                            borderBottom: '1px solid #7D8FA960',
                        }}>
                            <td className="w-1/5 px-4 font-semibold capitalize py-4">{key.split(/(?=[A-Z])/).join(' ')}</td>
                            {pricingData.map(plan => (
                                <td key={plan.key} className="w-1/5 px-4 py-2 text-center">
                                    {plan[key] === 'Yes' ? <BiCheck size={20} className='mx-auto' color='green' /> : plan[key] === 'No' ? <IoCloseSharp size={20} className='mx-auto' color='red' /> : plan[key] === 0 ? <IoCloseSharp size={20} className='mx-auto' color='red' /> : plan[key]}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div >
    );
};

export default PricingTable;