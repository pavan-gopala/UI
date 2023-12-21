import React, { useEffect } from "react";
import { DescriptionComponent } from "../../../../styles/styles";
import { Grid } from "@mui/material";
import { Loader } from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  setValidation,
  setshowvalidation,
} from "../../../../redux/EmailValidation/validation";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/dist";
import jsondata from "../../../../ToolsDescription/ToolsDescription.json";
import { getcomponents } from "../../../Functions/getcomponents.functions";
import { Piechart } from "../websiteperformancecheck/charts/piechart.react";

export const Toolcomponentcombiner = () => {
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
  const components = getcomponents(form, table);
  const { formcomponent, tablecomponent } = components;
  const loading = useSelector((state) => state.mailvalidation.isLoading);
  const showvalidation = useSelector(
    (state) => state.mailvalidation.showvalidation,
  );
  const dispatch = useDispatch();
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
        <h2 className="tooldescription">
          {description} Back to <Link to="/">Home</Link>
        </h2>
      </DescriptionComponent>
      <Grid container>
        <Grid item xs={11} sm={9} margin={"auto"}>
          {formcomponent}
          {loading && <Loader />}
          {showvalidation && tablecomponent}
          {!showvalidation && <Piechart />}
        </Grid>
        {name === "check" && <Webcheckpage/>}
      </Grid>
    </div>
  );
};
