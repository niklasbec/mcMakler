import React, { useState, useEffect } from "react";
import { Input, Select, Spin, Result, Button } from "antd";
import { useParams } from "react-router-dom";
import { SearchOutlined, ArrowLeftOutlined} from "@ant-design/icons";
import mockData from "../../apiData/data.js";
import ApplicantCard from "./ApplicantCard";
import t from "../../utils/getTranslation";
import useEffectNoInitial from "../../utils/useEffectNotOnInitialRender";
import { useDispatch } from "react-redux";

const { Option } = Select;

const Applicants = (props: any) => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [initialViewed, setInitialViewed] = useState<any[]>([]);
  const [initialAppointments, setInitialAppoinments] = useState<any[]>([]);
  const [viewed, setViewed] = useState<any[]>([]);
  const [newCount, setNewCount] = useState<number>(0);
  const [other, setOther] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [queryParam, setQueryParam] = useState<string>("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#9D9D9D",
      }}
    />
  );

  useEffectNoInitial(() => {
    let tempViewed: any[] = [];
    let tempAppointments: any[] = [];

    initialViewed.map((curr) => {
      if (curr.searchText.toLowerCase().includes(queryParam.toLowerCase())) {
        tempViewed.push({
          ...curr,
          searchText: curr.firstName + " " + curr.lastName + " " + curr.mail,
        });
      }
    });

    initialAppointments.map((curr) => {
      if (curr.searchText.toLowerCase().includes(queryParam.toLowerCase())) {
        tempAppointments.push({
          ...curr,
          searchText: curr.firstName + " " + curr.lastName + " " + curr.mail,
        });
      }
    });

    setViewed(tempViewed);
    setAppointments(tempAppointments);
  }, [queryParam]);

  const onSearch = (e: any) => {
    setQueryParam(e.target.value);
    // window.location.pathname = `/applicants/search=${e.target.value}`
    window.history.replaceState( {} , "title", `/applicants/search=${e.target.value}` );

  };

  const handleSelectChange = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    setLoading(true);

    let tempViewed: any[] = [];
    let tempAppointments: any[] = [];
    let tempOther: any[] = [];
    let newItemsCount = 0;

    dispatch({
      type: "SET_APPLICANTS",
      payload: mockData
    })

    mockData.applicants.map((curr: any) => {
      if (curr.new) {
        newItemsCount++;
      }

      if (curr.status === "Appointment_Set") {
        tempAppointments.push({
          ...curr,
          searchText: curr.firstName + " " + curr.lastName + " " + curr.mail,
        });
      } else if (curr.status === "Property_Viewed") {
        tempViewed.push({
          ...curr,
          searchText: curr.firstName + " " + curr.lastName + " " + curr.mail,
        });
      } else {
        tempOther.push({
          ...curr,
          searchText: curr.firstName + " " + curr.lastName + " " + curr.mail,
        });
      }
    });

    setServerError(Math.random() < 0.2);

    setTimeout(() => {
      setViewed(tempViewed);
      setInitialViewed(tempViewed);

      setAppointments(tempAppointments);
      setInitialAppoinments(tempAppointments);

      setOther(tempOther);

      setNewCount(newItemsCount);
      if (id) {
        if (id.includes("search=")) {
          let param = id.split("search=")[1];
          setQueryParam(param);
        }
      }
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="applicants-component">
      <div className="applicants-heading">
        <div className="applicants-heading-left">
          <ArrowLeftOutlined style={{fontSize: "18px", color: "#80868B"}}/>
          <h2>{t("applicant-heading")}</h2>
        </div>

        {loading ? (
          <Spin style={{ color: "rgb(245, 188, 65)" }} />
        ) : (
          <div className="applicants-heading-right">
            <div>
              <p>
                <span>
                  {serverError
                    ? 0
                    : viewed.length + appointments.length + other.length}
                </span>
                <br />
                {t("total")}
              </p>
            </div>

            <div>
              <p>
                <span>{serverError ? 0 : newCount}</span>
                <br />
                {t("new")}
              </p>
            </div>

            <div>
              <p>
                <span>{serverError ? 0 : viewed.length}</span>
                <br />
                {t("viewed")}
              </p>
            </div>

            <div>
              <p>
                <span>{serverError ? 0 : appointments.length}</span>
                <br />
                {t("appointment")}
              </p>
            </div>

            <div>
              <p>
                <span>{serverError ? 0 : other.length}</span>
                <br />
                {t("others")}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="search-filter-area">
        <Input
          placeholder={t("search-placeholder")}
          size="large"
          prefix={prefix}
          value={queryParam}
          className="applicants-search-field"
          onChange={onSearch}
        />

        <Select
          defaultValue="descending"
          style={{ width: 120, fontSize: "14px" }}
          onChange={handleSelectChange}
          size="large"
          className="select-field"
        >
          <Option value={"ascending"}>{t("ascending")}</Option>
          <Option value="descending">{t("descending")}</Option>
        </Select>

        <Select
          defaultValue={mockData.statusTypes[0].value}
          style={{ width: 120, fontSize: "14px" }}
          onChange={handleSelectChange}
          size="large"
        >
          {mockData.statusTypes.map((curr) => {
            return <Option value={curr.value}>{curr.title}</Option>;
          })}
        </Select>
      </div>

      <section className="appointments-set">
        <h3>
          {t("appointment-set")} ({serverError ? 0 : appointments.length})
        </h3>
        {loading ? (
          <Spin style={{ color: "rgb(245, 188, 65)" }} />
        ) : serverError ? (
          <Result
            status="warning"
            title={t("server-error")}
            extra={
              <Button type="primary" key="reload" onClick={() => window.location.reload()}>
                {t("reload")}
              </Button>
            }
          />
        ) : appointments.length > 0 ? (
          <div className="appointments-list">
            {appointments.map((curr: any, index: number) => {
              return (
                <ApplicantCard
                  key={index}
                  bid={curr.bid}
                  canceled={curr.canceled}
                  firstName={curr.firstName}
                  lastName={curr.lastName}
                  phone={curr.phone}
                  email={curr.mail}
                  status={curr.status}
                  date={curr.appointment}
                />
              );
            })}
          </div>
        ) : (
          <Result title={t("no-applicants-error")} />
        )}
      </section>

      <section className="property-viewed">
        <h3>
          {t("property-viewed")} ({serverError ? 0 : viewed.length})
        </h3>
        {loading ? (
          <Spin style={{ color: "rgb(245, 188, 65)" }} />
        ) : serverError ? (
          <Result
            status="warning"
            title={t("server-error")}
            extra={
              <Button type="primary" key="reload" onClick={() => window.location.reload()}>
                {t("reload")}
              </Button>
            }
          />
        ) : viewed.length > 0 ? (
          <div className="viewed-list">
            {viewed.map((curr: any) => {
              return (
                <ApplicantCard
                  bid={curr.bid}
                  canceled={curr.canceled}
                  firstName={curr.firstName}
                  lastName={curr.lastName}
                  phone={curr.phone}
                  email={curr.mail}
                  status={curr.status}
                  date={curr.appointment}
                />
              );
            })}
          </div>
        ) : (
          <Result title={t("no-applicants-error")} />
        )}
      </section>
    </div>
  );
};

export default Applicants;
