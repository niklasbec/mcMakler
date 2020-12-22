import moment from "moment";
import "moment/locale/de";

const applicantData = {
    "applicants": [
        {
            "firstName": "Niklas",
            "lastName": "Becker",
            "mail": "niklasbeckerr@gmail.com",
            "phone": "+4915252302175",
            "status": "Interessted",
            "appointment": null,
            "bid": null,
        },
        {
            "firstName": "Friedrich",
            "lastName": "Heinrich",
            "mail": "friedrich.heinrich@gmail.com",
            "phone": "+4914634423811",
            "status": "Appointment_Set",
            "appointment": moment().add(2, "days").format('LLL'),
            "bid": null
        },
        {
            "firstName": "Hans",
            "lastName": "Ulrich",
            "mail": "hans-ulrichh@gmail.com",
            "phone": "+4914634423812",
            "status": "Appointment_Set",
            "appointment": moment().add(4, "days").format('LLL'),
            "bid": null,
        },
        {
            "firstName": "Karlheinz",
            "lastName": "Brandenburg",
            "mail": "karlheinzbrandenburg@gmail.com",
            "phone": "+4914634423813",
            "status": "Appointment_Set",
            "appointment": moment().add(8, "days").format('LLL'),
            "bid": null
        },
        {
            "firstName": "Maximilian von",
            "lastName": "Mustermann",
            "mail": "max.mustermann@gmail.com",
            "phone": "+4914634423814",
            "status": "Property_Viewed",
            "appointment": moment().subtract(2, "days").format('LLL'),
            "bid": null
        },
        {
            "firstName": "Bernhard",
            "lastName": "Weiß",
            "mail": "bernhard.weiß@gmail.com",
            "phone": "+4914634423815",
            "status": "Property_Viewed",
            "appointment": moment().subtract(1, "days").format('LLL'),
            "bid": null,
        },
        {
            "firstName": "Hansjörg",
            "lastName": "Felmy",
            "mail": "hansjörg.felmy@gmail.com",
            "phone": "+4914634423816",
            "status": "Property_Viewed",
            "appointment": moment().subtract(4, "days").format('LLL'),
            "bid": 320000
        },
        {
            "firstName": "Ekkehard",
            "lastName": "Hardy",
            "mail": "ekkehard.hardy@gmail.com",
            "phone": "+4914634423817",
            "status": "Property_Viewed",
            "appointment": moment().subtract(9, "days").format('LLL'),
            "bid": 20000000
        }
    ],
    "statusTypes": [{value: "Property_Viewed", title: "Property Viewed"}, {value: "Appointment_Set", title: "Appointment Set"}, {value: "Interessted", title: "Interessted"}, {value: "Offer_Accepted", title: "Offer Accepted"}]
}

export default applicantData;