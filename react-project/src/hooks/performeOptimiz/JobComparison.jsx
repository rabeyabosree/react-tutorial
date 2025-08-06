import React, { useMemo, useState } from 'react';

function JobComparison() {
    const jobOffers = [
        {
            id: 1, company: "Techify Ltd", salary: 59940, location: "Dhaka", remote: true, perks: ["health", "stock options"]
        },
        {
            id: 2, company: "Code Crafy Inc", salary: 45553, location: "Remote", remote: true, perks: ["remote setup", "Bonus"]
        },
        {
            id: 3, company: "PixelSoft", salary: 67555, location: "chattogram", remote: false, perks: ["Lunch", "Transportation"]
        },
        {
            id: 4, company: "vivaSoft", salary: 89908, location: "Shylet", remote: true, perks: ["health", "Bonus"]
        },
        {
            id: 5, company: "Techify Ltd", salary: 5990, location: "Rangpur", remote: true, perks: ["Lunch", "stock options"]
        }
    ];

    const [filterLocation, setFilterLocation] = useState('');
    const [remoteOnly, setRemoteOnly] = useState(false);

    const filteredJobs = useMemo(() => {
        return jobOffers.filter((job) => {
            if (remoteOnly && !job.remote) return false;
            if (filterLocation && job.location !== filterLocation) return false;
            return true;
        });
    }, [filterLocation, remoteOnly]);

    const highestSalary = useMemo(() => {
        return Math.max(...jobOffers.map(job => job.salary));
    }, [jobOffers]);

    return (
        <div>
            <h1>Job Comparison</h1>

            <div>
                <label>Filter by location: </label>
                <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                    <option value="">All</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="chattogram">chattogram</option>
                    <option value="Shylet">Shylet</option>
                    <option value="Rangpur">Rangpur</option>
                </select>

                <label style={{ marginLeft: '20px' }}>
                    <input
                        type="checkbox"
                        checked={remoteOnly}
                        onChange={() => setRemoteOnly(prev => !prev)}
                    />
                    Remote Only
                </label>
            </div>

            <div style={{ marginTop: '20px' }}>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div key={job.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h2>{job.company}</h2>
                            <p>Salary: {job.salary} {job.salary === highestSalary && <strong>(Best Offer)</strong>}</p>
                            <p>Location: {job.location}</p>
                            <p>Remote: {job.remote ? "Yes" : "No"}</p>
                            <p>Perks: {job.perks.join(", ")}</p>
                        </div>
                    ))
                ) : (
                    <p>No matching job offers</p>
                )}
            </div>
        </div>
    );
}

export default JobComparison;
