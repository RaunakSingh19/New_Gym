import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./FacilityDetail.css";

// Default images (fallback)
const facilityImages = {
    gym: require("../assets/images/gym.jpg"),
    pool: require("../assets/images/pool.jpg"),
    yoga: require("../assets/images/yoga.jpg"),
    spa: require("../assets/images/spa.jpg"),
};

// Facility details
const facilityDetails = {
    gym: {
        title: "Modern Gym",
        description: "Our gym is equipped with state-of-the-art machines, free weights, and personal trainers to help you achieve your fitness goals.",
    },
    pool: {
        title: "Swimming Pool",
        description: "Enjoy our Olympic-sized pool, perfect for professional swimmers and casual relaxation.",
    },
    yoga: {
        title: "Yoga Studio",
        description: "A peaceful environment for yoga enthusiasts to practice and rejuvenate.",
    },
    spa: {
        title: "Spa & Sauna",
        description: "Unwind and rejuvenate after workouts with our luxurious spa and sauna services.",
    },
};

const FacilityDetail = () => {
    const { facilityId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Get facility data
    const facility = facilityDetails[facilityId];
    const receivedImage = location.state?.image; // Get image from navigation state

    if (!facility) {
        return <h2 style={{ textAlign: "center" }}>Facility not found!</h2>;
    }

    return (
        <div className="facility-detail-container">
            <img 
                src={receivedImage || facilityImages[facilityId]} 
                alt={facility.title} 
                className="facility-image" 
            />
            <div className="facility-info">
                <h1 className="facility-title">{facility.title}</h1>
                <p className="facility-description">{facility.description}</p>
                <button className="facility-button" onClick={() => navigate("/facilities")}>
                    Back to Facilities
                </button>
            </div>
        </div>
    );
};


export default FacilityDetail;
