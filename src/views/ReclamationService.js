import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function ReclamationService() {
    const [reclamations, setReclamations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/reclamations/all");
                setReclamations(response.data);
            } catch (error) {
                console.error("Error fetching reclamations:", error);
            }
        };

        fetchData();
    }, []);

    // Extract unique services and count reclamations for each service
    const servicesData = reclamations.reduce((accumulator, reclamation) => {
        const serviceName = reclamation.service.service;
        accumulator[serviceName] = (accumulator[serviceName] || 0) + 1;
        return accumulator;
    }, {});

    const chartData = {
        labels: Object.keys(servicesData),
        datasets: [
            {
                label: "Reclamations",
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,0.4)",
                hoverBorderColor: "rgba(75,192,192,1)",
                data: Object.values(servicesData),
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 },
            },
        },
        
    };

    return (
        <div>
            <Bar data={chartData} options={chartOptions}  />
        </div>
    );
}

export default ReclamationService;