import { PortForm } from "../Pages/subpages/portcheck/Portform";
import { MxForm } from "../Pages/subpages/mxrecords/MxForm";
import { SiteInfoForm } from "../Pages/subpages/siteinfoscanner/SiteInfoform";
import { OutputData } from "../Pages/subpages/portcheck/OutputData";
import { UrlValidationForm,} from "../Pages/subpages/websiteperformancecheck/websiteperfomancecheck.form";
export const getcomponents = (formcheck, tablecheck) => {
    const components = {
        formcomponent: "",
        tablecomponent: "",
    };
    let form = '';
    let table = '';
    switch (formcheck) {
        case 'portform':
            form = <PortForm />;
            break;
        case 'mxform':
            form = <MxForm />;
            break;
        case 'serverinfoform':
            form = <SiteInfoForm />;
            break;
        case 'websiteperformancecheck':
            form = <UrlValidationForm/>
    }
   table = <OutputData />;

   components['formcomponent'] = form;
   components['tablecomponent'] = table;
   return components;
}