import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import MiniSearchResult from "../search-results/MiniSearchResult";
import "./userProfile.css";
import BookingComponent from "./BookingComponent";
import axiosInstance from "../../api/apiUrl";

//TODO: Maybe login sign up buttons should change...
const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const username = localStorage.getItem("username");

        if (!username) {
          setError("User not logged in");
          setLoading(false);
          return;
        }
        const userRes = await axiosInstance.get(`/user/${username}`);
        const userId = userRes.data.id;

        const res = await axiosInstance.get(`/bookings/${userId}`);
        console.log(res.data);

        setBookings(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings", error);
        setError("Failed to get bookings");
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="up-wrap">
      <div className="up-profileinfo">
        <p> Your Profile </p>
        <div className="up-userd">
          <UserDetails />
        </div>
      </div>
      <div className="up-prev">
        <p> Where You've Been! </p>
        <div className="up-prevd">
          {bookings.map((booking) => (
            <BookingComponent key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
