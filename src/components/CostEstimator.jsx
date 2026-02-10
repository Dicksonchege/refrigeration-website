import { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CostEstimator.css';

const CostEstimator = () => {
    const [selectedAppliance, setSelectedAppliance] = useState('');
    const [selectedIssue, setSelectedIssue] = useState('');
    const [estimate, setEstimate] = useState(null);

    const appliances = [
        { id: 'fridge', name: 'Refrigerator' },
        { id: 'freezer', name: 'Freezer / Cold Room' },
        { id: 'ac', name: 'Air Conditioner' },
        { id: 'hvac', name: 'HVAC System' }
    ];

    const issues = {
        fridge: [
            { id: 'not_cooling', name: 'Not Cooling', range: '1,500 - 3,500' },
            { id: 'leaking', name: 'Water Leaking', range: '1,200 - 2,500' },
            { id: 'noise', name: 'Making Noise', range: '1,800 - 4,000' },
            { id: 'frost', name: 'Frost Buildup', range: '1,500 - 3,000' }
        ],
        freezer: [
            { id: 'not_freezing', name: 'Not Freezing', range: '2,000 - 4,500' },
            { id: 'power', name: 'Not Turning On', range: '2,500 - 5,000' },
            { id: 'seal', name: 'Door Seal/Gasket', range: '1,500 - 3,000' }
        ],
        ac: [
            { id: 'not_cooling', name: 'Not Blowing Cold Air', range: '2,500 - 5,000' },
            { id: 'leak', name: 'Water Leakage', range: '2,000 - 4,000' },
            { id: 'service', name: 'General Service', range: '2,000 - 3,500' }
        ],
        hvac: [
            { id: 'maintenance', name: 'Routine Maintenance', range: '3,500 - 7,000' },
            { id: 'repair', name: 'System Repair', range: '5,000 - 15,000' }
        ]
    };

    const handleCalculate = () => {
        if (!selectedAppliance || !selectedIssue) return;

        const applianceIssues = issues[selectedAppliance];
        const issueData = applianceIssues.find(i => i.id === selectedIssue);

        if (issueData) {
            setEstimate(issueData.range);
        }
    };

    const handleApplianceChange = (e) => {
        setSelectedAppliance(e.target.value);
        setSelectedIssue(''); // Reset issue on appliance change
        setEstimate(null);
    };

    return (
        <section className="estimator-section section-padding">
            <div className="container">
                <div className="estimator-wrapper">
                    <div className="estimator-header">
                        <div className="estimator-icon-circle">
                            <FaCalculator />
                        </div>
                        <h2 className="section-title">Get an <span className="text-blue">Instant Estimate</span></h2>
                        <p>Not sure about the cost? Select your issue below to get a rough price range.</p>
                    </div>

                    <div className="estimator-box">
                        <div className="form-group">
                            <label>1. Select Appliance</label>
                            <select value={selectedAppliance} onChange={handleApplianceChange}>
                                <option value="" disabled>-- Choose Appliance --</option>
                                {appliances.map(app => (
                                    <option key={app.id} value={app.id}>{app.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>2. Select Problem</label>
                            <select
                                value={selectedIssue}
                                onChange={(e) => setSelectedIssue(e.target.value)}
                                disabled={!selectedAppliance}
                            >
                                <option value="" disabled>
                                    {selectedAppliance ? "-- Choose Problem --" : "-- Select Appliance First --"}
                                </option>
                                {selectedAppliance && issues[selectedAppliance].map(issue => (
                                    <option key={issue.id} value={issue.id}>{issue.name}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="btn btn-primary btn-block"
                            onClick={handleCalculate}
                            disabled={!selectedAppliance || !selectedIssue}
                        >
                            <FaTools /> Calculate Estimate
                        </button>
                    </div>

                    {estimate && (
                        <div className="estimate-result animate-fade-up">
                            <h3>Estimated Cost:</h3>
                            <div className="price-tag">KES {estimate}</div>
                            <p className="disclaimer">*Pricing is an estimate. Final cost depends on parts needed.</p>

                            <div className="estimate-actions">
                                <Link to="/book-repair" className="btn btn-outline">Schedule Repair Now</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CostEstimator;
