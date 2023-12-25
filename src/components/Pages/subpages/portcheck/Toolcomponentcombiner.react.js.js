import React, { useEffect } from "react";
import { DescriptionComponent } from "../../../../styles/styles";
import { Grid } from "@mui/material";
import { Loader } from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  setValidation,
  setshowvalidation,
  settoolname,
} from "../../../../redux/EmailValidation/validation";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/dist";
import jsondata from "../../../../ToolsDescription/ToolsDescription.json";
import { getcomponents } from "../../../Functions/getcomponents.functions";
import { Piechart } from "../websiteperformancecheck/charts/piechart.react";
import {Webcheckpage} from "../websiteperformancecheck/webcheckpage.react";
import { Websiteperformanccheck } from "../../../loader/Websiteperformanccheck.loader";
import { PerformanceBar } from "../websiteperformancecheck/charts/performance.bar";
import { useNavigate } from "react-router-dom/dist";

export const Toolcomponentcombiner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = jsondata.data;
  let title = "";
  let name = "";
  let description = "";
  let metadata = "";
  let form = "";
  let table = "";
  data.map((item) => {
    if (item.pathname === window.location.pathname) {
      title = item.title;
      if (item.name === "Website Performance Check") {
        name = "webcheck";
      } else {
        name = item.name;
      }
      description = item.description;
      metadata = item.metadata;
      form = item.form;
      table = item.table;
    }
  });
  dispatch(settoolname(name));
  const components = getcomponents(form, table);
  const { formcomponent, tablecomponent } = components;
  const loading = useSelector((state) => state.mailvalidation.isLoading);
  const showvalidation = useSelector(
    (state) => state.mailvalidation.showvalidation,
  );
  
  useEffect(() => {
    dispatch(setshowvalidation(false));
  }, []);


  return (
    <div style={{ minHeight: "80vh" }}>
      <DescriptionComponent>
        <Helmet>
          <title>{title}</title>
          <meta name={metadata.name} content={metadata.content} />
        </Helmet>
        {name !== "webcheck" && <h1 className="toolhead">{name}</h1>}
        {name !== "webcheck" &&<h2 className="tooldescription">
          {description} Back to <Link to="/">Home</Link>
        </h2>}
      </DescriptionComponent>
      <Grid container>
        <Grid item xs={11} sm={9} margin={"auto"}>
          {formcomponent}
          {loading && name !== "webcheck" && <Loader />}
          {showvalidation && name !== "webcheck" && tablecomponent}
        
        </Grid>
        {name === "webcheck" && <Webcheckpage/>}
        {name === "webcheck" && showvalidation && navigate('/performancecheck') }
       
      </Grid>
    </div>
  );
};
