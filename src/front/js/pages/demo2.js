import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/demo2.css";

import { Context } from "../store/appContext";

import {ProfileDashboard} from "../component/profile-dashboard"

import bg from "../../img/bg.png";

export const Demo2 = () => {
	const { store, actions } = useContext(Context);

	return (
<ProfileDashboard/>
	);
};
