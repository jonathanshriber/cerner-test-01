(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }

    //smart.api.create

    //smart.server
    //----------------------
    //serviceUrl: "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d"

    //smart.tokenResponse
    //----------------------
    // access_token: "eyJraWQiOiIyMDIxLTA2LTI1VDAzOjQ1OjE1LjAzMy5lYyIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0.eyJzdWIiOiJwb3J0YWwiLCJ1cm46Y29tOmNlcm5lcjphdXRob3JpemF0aW9uOmNsYWltcyI6eyJ2ZXIiOiIxLjAiLCJwcHIiOiJ1bmRlZmluZWQiLCJwYXRpZW50IjoiMTI3MjQwNjUiLCJlbmNvdW50ZXIiOiI5Nzk1MzQ4MyIsInRudCI6ImVjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZCIsImF6cyI6ImxhdW5jaCBvbmxpbmVfYWNjZXNzIG9wZW5pZCBwYXRpZW50XC9PYnNlcnZhdGlvbi5yZWFkIHBhdGllbnRcL1BhdGllbnQucmVhZCBwcm9maWxlIiwidXNlciI6IjEyNzQyMDY5In0sImF6cCI6IjRkZWRjOWFlLWY5NDEtNDFhNy1hMDgwLWFkMjljNDBkMDZlYiIsImlzcyI6Imh0dHBzOlwvXC9hdXRob3JpemF0aW9uLmNlcm5lci5jb21cLyIsImV4cCI6MTYyNDczNTc5MywiaWF0IjoxNjI0NzM1MTkzLCJqdGkiOiJiZmFlNzc3Zi05YjNkLTQ2OTItYTczZi03ZDMzZTU4MWI0Y2IiLCJ1cm46Y2VybmVyOmF1dGhvcml6YXRpb246Y2xhaW1zOnZlcnNpb246MSI6eyJ2ZXIiOiIxLjAiLCJwcm9maWxlcyI6eyJtaWxsZW5uaXVtLXYxIjp7InBwciI6InVuZGVmaW5lZCIsInBlcnNvbm5lbCI6IjEyNzQyMDY5IiwiZW5jb3VudGVyIjoiOTc5NTM0ODMifSwic21hcnQtdjEiOnsicGF0aWVudHMiOlsiMTI3MjQwNjUiXSwiYXpzIjoibGF1bmNoIG9ubGluZV9hY2Nlc3Mgb3BlbmlkIHBhdGllbnRcL09ic2VydmF0aW9uLnJlYWQgcGF0aWVudFwvUGF0aWVudC5yZWFkIHByb2ZpbGUifX0sImNsaWVudCI6eyJuYW1lIjoiTXkgYW1hemluZyBTTUFSVCBhcHAiLCJpZCI6IjRkZWRjOWFlLWY5NDEtNDFhNy1hMDgwLWFkMjljNDBkMDZlYiJ9LCJ1c2VyIjp7InByaW5jaXBhbCI6InBvcnRhbCIsInBlcnNvbmEiOiJwcm92aWRlciIsImlkc3AiOiJlYzI0NThmMi0xZTI0LTQxYzgtYjcxYi0wZTcwMWFmNzU4M2QiLCJzZXNzaW9uSWQiOiI3MzMwMWNiZC03OTU2LTQ1YjQtODMzMi00MWIzYWZjZWNhMmEiLCJwcmluY2lwYWxUeXBlIjoidXNlcm5hbWUiLCJwcmluY2lwYWxVcmkiOiJodHRwczpcL1wvbWlsbGVubmlhLmNlcm5lci5jb21cL2luc3RhbmNlXC9lYzI0NThmMi0xZTI0LTQxYzgtYjcxYi0wZTcwMWFmNzU4M2RcL3ByaW5jaXBhbFwvMDAwMC4wMDAwLjAwQzIuNkRCNSIsImlkc3BVcmkiOiJodHRwczpcL1wvbWlsbGVubmlhLmNlcm5lci5jb21cL2FjY291bnRzXC9jMTk0MS5jZXJuX2FiY24uY2VybmVyYXNwLmNvbVwvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkXC9sb2dpbiJ9LCJ0ZW5hbnQiOiJlYzI0NThmMi0xZTI0LTQxYzgtYjcxYi0wZTcwMWFmNzU4M2QifX0.M4VXfaaB2fEtJuHPmmzFHC5RJWLjXWxDD6nHbSwHbbJ-_b6Yvx1h-ArfNyDY_YS7xEXa_0YB-UY23i4vn9oLZQ"
    // active_ttl: 46791
    // code: "e1f9a70c-cc25-4202-b8e9-06d842b189e4"
    // encounter: "97953483"
    // expires_in: 570
    // id_token: "eyJraWQiOiIyMDIxLTA2LTI1VDAzOjQ1OjE1LjAzMy5yc2EiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJwb3J0YWwiLCJhdWQiOiI0ZGVkYzlhZS1mOTQxLTQxYTctYTA4MC1hZDI5YzQwZDA2ZWIiLCJwcm9maWxlIjoiaHR0cHM6XC9cL2ZoaXItZWhyLWNvZGUuY2VybmVyLmNvbVwvZHN0dTJcL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvUHJhY3RpdGlvbmVyXC8xMjc0MjA2OSIsImlzcyI6Imh0dHBzOlwvXC9hdXRob3JpemF0aW9uLmNlcm5lci5jb21cL3RlbmFudHNcL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvb2lkY1wvaWRzcHNcL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvIiwibmFtZSI6IlBvcnRhbCwgUG9ydGFsIiwiZXhwIjoxNjI0NzM1Nzk0LCJpYXQiOjE2MjQ3MzUxOTQsImZoaXJVc2VyIjoiaHR0cHM6XC9cL2ZoaXItZWhyLWNvZGUuY2VybmVyLmNvbVwvZHN0dTJcL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvUHJhY3RpdGlvbmVyXC8xMjc0MjA2OSJ9.AFltO56JyC01CMzIbnwiswz5KxwjxHleovTt_tCdv5DM2tKkaizJ3OYNIlO97QKZefnWEjiWDHZIqlDj4Wb5Wfa0vaosTCEl-2GBNnKfGImw6a-C0QKM222nxman8OfGC81Ggo5fjpaYpbsvwFYPgnLDfkrU1yK1AnfvI3bH_UOVdOkfNZuB8_2Jy-_PwUSTKmixziyaIfwwCoJqt9ovAxxXoGW5Pwa5-IX5cAqZL_cIFykCzUNFLwiGJncrQOQhsD6cH9ynYyPZDn2iV92-cPiwB1DxK8OwTF0RHY9g97PSTltD-fZffwxIOjcrEfGSxJ6QABIhDNpKEUloq5Ibtg"
    // need_patient_banner: true
    // patient: "12724065"
    // refresh_token: "eyJpZCI6ImJlMWNhNmFhLTBkYTQtNDZiMC1iOWI1LWQyYzNjN2Q3M2U4MyIsInNlY3JldCI6IjVjMTg3MDY3LTAwZTUtNGZjMC04ZDYyLTllYjBhNTg5MTUzOSIsInZlciI6IjEuMCIsInR5cGUiOiJvbmxpbmVfYWNjZXNzIiwicHJvZmlsZSI6InNtYXJ0LXYxIn0="
    // scope: "launch online_access openid patient/Observation.read patient/Patient.read profile"
    // smart_style_url: "https://smart.cerner.com/styles/smart-v1.json"
    // state: "9521cb59-9940-d01e-b99c-ef49f55664af"
    // tenant: "ec2458f2-1e24-41c8-b71b-0e701af7583d"
    // token_type: "Bearer"
    // user: "12742069"
    // username: "portal

    // function onReady(smart)  {
    //   if (smart.hasOwnProperty('patient')) {
    //     var patient = smart.patient;
    //     var pt = patient.read();
    //     var obv = smart.patient.api.fetchAll({
    //                 type: 'Observation',
    //                 query: {
    //                   code: {
    //                     $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
    //                           'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
    //                           'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
    //                   }
    //                 }
    //               });

    //     $.when(pt, obv).done(function(patient, obv) {
    //       var byCodes = smart.byCodes(obv, 'code');
    //       var gender = patient.gender;

    //       var fname = '';
    //       var lname = '';

    //       if (typeof patient.name[0] !== 'undefined') {
    //         fname = patient.name[0].given.join(' ');
    //         lname = patient.name[0].family.join(' ');
    //       }

    //       var height = byCodes('8302-2');
    //       var systolicbp = getBloodPressureValue(byCodes('55284-4'),'8480-6');
    //       var diastolicbp = getBloodPressureValue(byCodes('55284-4'),'8462-4');
    //       var hdl = byCodes('2085-9');
    //       var ldl = byCodes('2089-1');

    //       var p = defaultPatient();
    //       p.birthdate = patient.birthDate;
    //       p.gender = gender;
    //       p.fname = fname;
    //       p.lname = lname;
    //       p.height = getQuantityValueAndUnit(height[0]);

    //       if (typeof systolicbp != 'undefined')  {
    //         p.systolicbp = systolicbp;
    //       }

    //       if (typeof diastolicbp != 'undefined') {
    //         p.diastolicbp = diastolicbp;
    //       }

    //       p.hdl = getQuantityValueAndUnit(hdl[0]);
    //       p.ldl = getQuantityValueAndUnit(ldl[0]);

    //       ret.resolve(p);
    //     });
    //   } else {
    //     onError();
    //   }
    // }

    function onReady(smart)  {
      if (smart.hasOwnProperty('patient')) {
        var appt = dummyAppointment();
        
        var patient = smart.patient;
        var pt = patient.read();
        var appt = smart.api.create(dummyAppointment(), {});

        $.when(appt).done(function(appt) {

          console.log(appt);

          ret.resolve(p);
        });
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  function defaultPatient(){
    return {
      fname: {value: ''},
      lname: {value: ''},
      gender: {value: ''},
      birthdate: {value: ''},
      height: {value: ''},
      systolicbp: {value: ''},
      diastolicbp: {value: ''},
      ldl: {value: ''},
      hdl: {value: ''},
    };
  }

  function getBloodPressureValue(BPObservations, typeOfPressure) {
    var formattedBPObservations = [];
    BPObservations.forEach(function(observation){
      var BP = observation.component.find(function(component){
        return component.code.coding.find(function(coding) {
          return coding.code == typeOfPressure;
        });
      });
      if (BP) {
        observation.valueQuantity = BP.valueQuantity;
        formattedBPObservations.push(observation);
      }
    });

    return getQuantityValueAndUnit(formattedBPObservations[0]);
  }

  function getQuantityValueAndUnit(ob) {
    if (typeof ob != 'undefined' &&
        typeof ob.valueQuantity != 'undefined' &&
        typeof ob.valueQuantity.value != 'undefined' &&
        typeof ob.valueQuantity.unit != 'undefined') {
          return ob.valueQuantity.value + ' ' + ob.valueQuantity.unit;
    } else {
      return undefined;
    }
  }

  function dummyAppointment()
  {
    return `{
      "resourceType": "Appointment",
      "id": "JLS123456789",
      "meta": {
          "versionId": "1",
          "lastUpdated": "2021-06-28T11:00:00.000-05:00"
      },
      "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian MRI results discussion</div>"
      },
      "identifier": [
          {
              "system": "http://example.org/sampleappointment-identifier",
              "value": "123"
          }
      ],
      "status": "booked",
      "serviceCategory": {
          "coding": [
              {
                  "system": "http://example.org/service-category",
                  "code": "gp",
                  "display": "General Practice"
              }
          ]
      },
      "specialty": [
          {
              "coding": [
                  {
                      "system": "http://snomed.info/sct",
                      "code": "394814009",
                      "display": "General practice"
                  }
              ]
          }
      ],
      "appointmentType": {
          "coding": [
              {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
                  "code": "WALKIN",
                  "display": "A previously unscheduled walk-in visit"
              }
          ]
      },
      "priority": 5,
      "description": "Discussion on the results of your recent MRI",
      "minutesDuration": 15,
      "slot": [
          {
              "reference": "Slot/235858"
          }
      ],
      "created": "2021-06-28T11:00:00.000-05:00",
      "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
      "participant": [
          {
              "actor": {
                  "reference": "Patient/12688011",
                  "display": "MXDTEST, WHSCRIPTJENAMB"
              },
              "required": "required",
              "status": "accepted"
          },
          {
              "type": [
                  {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                              "code": "ATND"
                          }
                      ]
                  }
              ],
              "required": "required",
              "status": "accepted"
          },
          {
              "actor": {
                  "reference": "Location/235852",
                  "display": "Sanford Health East Dickinson Clinic"
              },
              "required": "required",
              "status": "accepted"
          }
      ],
      "requestedPeriod": [
          {
              "start": "2021-07-01T09:00:00.000Z",
              "end": "2021-07-01T09:30:00.000Z"
          }
      ]
  }`;
  }

  window.drawVisualization = function(p) {
    $('#holder').show();
    $('#loading').hide();
    $('#fname').html(p.fname);
    $('#lname').html(p.lname);
    $('#gender').html(p.gender);
    $('#birthdate').html(p.birthdate);
    $('#height').html(p.height);
    $('#systolicbp').html(p.systolicbp);
    $('#diastolicbp').html(p.diastolicbp);
    $('#ldl').html(p.ldl);
    $('#hdl').html(p.hdl);
  };

})(window);
