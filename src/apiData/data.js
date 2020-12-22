import moment from "moment";
import "moment/locale/de";
import t from "../utils/getTranslation";

const applicantData = {
    "applicants": [
        {
            "firstName": "Niklas",
            "lastName": "Becker",
            "mail": "niklasbeckerr@gmail.com",
            "phone": "+4915252302175",
            "status": "Interessted",
            "appointment": null,
            "canceled": false,
            "bid": null,
            "new": true
        },
        {
            "firstName": "Jonas",
            "lastName": "Müller",
            "mail": "jonas-müller@gmail.com",
            "phone": "+4915202302175",
            "status": "Appointment_Set",
            "appointment": moment().add(9, "days"),
            "canceled": false,
            "bid": null,
            "new": false
        },
        {
            "firstName": "Friedrich",
            "lastName": "Heinrich",
            "mail": "friedrich.heinrich@gmail.com",
            "phone": "+4914634423811",
            "status": "Appointment_Set",
            "appointment": moment().add(2, "days"),
            "canceled": false,
            "bid": null,
            "new": false
        },
        {
            "firstName": "Hans",
            "lastName": "Ulrich",
            "mail": "hans-ulrichh@gmail.com",
            "phone": "+4914634423812",
            "status": "Appointment_Set",
            "appointment": moment().add(4, "days"),
            "canceled": false,
            "bid": null,
            "new": false,
        },
        {
            "firstName": "Karlheinz",
            "lastName": "Brandenburg",
            "mail": "karlheinzbrandenburg@gmail.com",
            "phone": "+4914634423813",
            "status": "Appointment_Set",
            "appointment": moment().add(8, "days"),
            "canceled": false,
            "bid": null,
            "new": false
        },
        {
            "firstName": "Maximilian von",
            "lastName": "Mustermann",
            "mail": "max.mustermann@gmail.com",
            "phone": "+4914634423814",
            "status": "Property_Viewed",
            "appointment": moment().subtract(2, "days"),
            "canceled": true,
            "bid": null,
            "new": false
        },
        {
            "firstName": "Bernhard",
            "lastName": "Weiß",
            "mail": "bernhard.weiß@gmail.com",
            "phone": "+4914634423815",
            "status": "Property_Viewed",
            "appointment": moment().subtract(1, "days"),
            "canceled": false,
            "bid": null,
            "new": false
        },
        {
            "firstName": "Hansjörg",
            "lastName": "Felmy",
            "mail": "hansjörg.felmy@gmail.com",
            "phone": "+4914634423816",
            "status": "Property_Viewed",
            "appointment": moment().subtract(4, "days"),
            "canceled": false,
            "bid": 320000,
            "new": false
        },
        {
            "firstName": "Ekkehard",
            "lastName": "Hardy",
            "mail": "ekkehard.hardy@gmail.com",
            "phone": "+4914634423817",
            "status": "Property_Viewed",
            "appointment": moment().subtract(9, "days"),
            "canceled": false,
            "bid": 2200000,
            "new": false
        }
    ],
    "statusTypes": [{value: "Property_Viewed", title: t("property-viewed")}, {value: "Appointment_Set", title: t("appointment-set")}, {value: "Interessted", title: t("interessted")}, {value: "Offer_Accepted", title: t("offer-accepted")}]
}

export default applicantData;