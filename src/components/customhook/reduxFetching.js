import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setValidation, setmxrecords, setsiteinfo } from '../../redux/EmailValidation/validation'; // replace with your actual actions

const useFetchData = ({payload}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };

      try {
        switch(true){
            case payload.type=='mxrecord':
                const mxresponse = await axios.post('https://validate24x7.com/api/mxrecord', { domain: payload.data }, { headers });
                dispatch(setmxrecords(mxresponse.data));
                return 'success';
                break;
            case payload.type=='email':
                const emailresponse = await axios.post('https://validate24x7.com/api/validateEmail', { email: payload.data }, { headers });
                dispatch(setValidation(emailresponse.data));
                return 'success';
                break;
            case payload.type == 'siteinfo':
                const siteinforesponse = await axios.post('https://validate24x7.com/api/domainipcheck', { domain: payload.data }, { headers });
                dispatch(setsiteinfo(siteinforesponse.data));
                return 'success';
                break;
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [dispatch, payload]);

};

export default useFetchData;