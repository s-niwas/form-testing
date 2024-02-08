import { icons } from "../icons";
import React, { useState, useEffect } from "react";

export default function ZohoFormValidation({ buttonLabel, index }) {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    COMPANYNAME: "",
    CONTACT_EMAIL: "",
    MOBILE: "",
  });

  const [validationResults, setValidationResults] = useState({
    COMPANYNAME: true,
    CONTACT_EMAIL: true,
    MOBILE: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmit(true);
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setValidationResults((prevResults) => ({
      ...prevResults,
      COMPANYNAME: formData.COMPANYNAME.length > 3,
    }));

    setValidationResults((prevResults) => ({
      ...prevResults,
      CONTACT_EMAIL: /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(
        formData.CONTACT_EMAIL
      ),
    }));

    setValidationResults((prevResults) => ({
      ...prevResults,
      MOBILE:
        /^\+[0-9]+$/.test(formData.MOBILE) &&
        formData.MOBILE.length > 4 &&
        formData.MOBILE.length <= 15,
    }));
  }, [formData]);

  const handleSubmit = () => {
    setSubmit(false);
    setValidationResults(() => ({
      COMPANYNAME: true,
      CONTACT_EMAIL: true,
      MOBILE: true,
    }));
    setFormData({
      COMPANYNAME: "",
      CONTACT_EMAIL: "",
      MOBILE: "",
    });
  };

  return (
    <div
      id="sf3z55f4139bdf0e6f89b17bb19c6f8da5100387094f3f588029eb5064caf6747ab8"
      data-type="signupform"
      key={index}
    >
      <div id="customForm">
        <input type="hidden" id="recapTheme" value="2" />
        <input type="hidden" id="isRecapIntegDone" value="false" />
        <input type="hidden" id="recapMode" value="157582000000156061" />
        <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
        <div
          name="SIGNUP_PAGE"
          id="SIGNUP_PAGE"
          className="SIGNUP_PAGE large_form_2_css"
        >
          <div>
            <div name="" changeid="" changename="">
              <div id="imgBlock" name="LOGO_DIV" logo="true"></div>
            </div>
            <div
              id="signupMainDiv"
              name="SIGNUPFORM"
              changeid="SIGNUPFORM"
              changename="SIGNUPFORM"
            >
              <div className="relative">
                <div
                  id="Zc_SignupSuccess"
                  className="hidden absolte bg-neutral-white p-1 border-solid border-2 my-2.5 break-all w-11/12"
                  style={{ marginLeft: "4%" }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img
                            className="successicon"
                            src="https://fpjb-zc1.maillist-manage.in/images/challangeiconenable.jpg"
                            align="absmiddle"
                            loading="lazy"
                          />
                        </td>
                        <td>
                          <span
                            id="signupSuccessMsg"
                            style={{
                              color: "rgb(73, 140, 132)",
                              fontSize: "14px",
                              wordBreak: "break-word",
                            }}
                          >
                            &nbsp;&nbsp;Thank you for Signing Up
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <form
                method="POST"
                id="zcampaignOptinForm"
                action="https://fpjb-zc1.maillist-manage.in/weboptin.zc"
                target="_zcSignup"
                onSubmit={handleSubmit}
              >
                <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                  <div id="SIGNUP_BODY" name="SIGNUP_BODY">
                    <div>
                      <div>
                        <div name="fieldsdivSf " className="zcsffieldsdiv">
                          <div
                            className="zcsffield mb-6 flex items-center border-b-2"
                            fieldid="157582000000000038"
                          >
                            <div name="SIGNUP_FORM_LABEL">
                              <img
                                src={icons.institution.src}
                                width={icons.institution.width}
                                height={icons.institution.height}
                                alt="Institution Icon"
                              />
                            </div>
                            <input
                              name="COMPANYNAME"
                              changeitem="SIGNUP_FORM_FIELD"
                              maxLength="100"
                              value={formData?.COMPANYNAME}
                              onChange={handleInputChange}
                              type="text"
                              className="input"
                              required
                              placeholder="Institution Name"
                            />
                            <div className="tooltip-form relative group inline-block">
                              {submit && formData.COMPANYNAME && (
                                <img
                                  src={
                                    validationResults.COMPANYNAME
                                      ? icons.valid.src
                                      : icons.invalid.src
                                  }
                                  width="18"
                                  height="18"
                                  alt="validation-icon"
                                  className={`${
                                    !validationResults.COMPANYNAME
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                />
                              )}
                              {!validationResults.COMPANYNAME && (
                                <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-gray-100 text-black text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                  Minimum 3 characters required
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className="zcsffield flex items-center border-b-2 mb-6"
                          fieldid="157582000000000023"
                        >
                          <div name="SIGNUP_FORM_LABEL">
                            <img
                              src={icons.email.src}
                              width={icons.email.width}
                              height={icons.email.height}
                              alt="Email Icon"
                            />
                          </div>
                          <input
                            className="input"
                            name="CONTACT_EMAIL"
                            value={formData?.CONTACT_EMAIL}
                            changeitem="SIGNUP_FORM_FIELD"
                            onChange={handleInputChange}
                            maxLength="100"
                            type="email"
                            required
                            placeholder="Email"
                          />
                          <div className="tooltip-form relative group inline-block">
                            {submit && formData.CONTACT_EMAIL && (
                              <img
                                src={
                                  validationResults.CONTACT_EMAIL
                                    ? icons.valid.src
                                    : icons.invalid.src
                                }
                                width="18"
                                height="18"
                                alt="validation-icon"
                                className={`${
                                  !validationResults.CONTACT_EMAIL
                                    ? "cursor-pointer"
                                    : ""
                                }`}
                              />
                            )}
                            {!validationResults.CONTACT_EMAIL && (
                              <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-gray-100 text-black text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                Enter a valid email address
                              </span>
                            )}
                          </div>
                        </div>
                        <div
                          className="zcsffield flex items-center border-b-2"
                          fieldid="157582000000000047"
                        >
                          <div name="SIGNUP_FORM_LABEL">
                            <img
                              src={icons.mobile.src}
                              width={icons.mobile.width}
                              height={icons.mobile.height}
                              alt="Contact number Icon"
                            />
                          </div>
                          <input
                            name="MOBILE"
                            value={formData?.MOBILE}
                            changeitem="SIGNUP_FORM_FIELD"
                            maxLength="100"
                            type="text"
                            className="input"
                            placeholder="Contact number"
                            required
                            onChange={handleInputChange}
                          />
                          <div className="tooltip-form relative inline-block group">
                            {submit && formData.MOBILE && (
                              <img
                                src={
                                  validationResults.MOBILE
                                    ? icons.valid.src
                                    : icons.invalid.src
                                }
                                width="18"
                                height="18"
                                alt="validation-icon"
                                className={`${
                                  !validationResults.MOBILE
                                    ? "cursor-pointer"
                                    : ""
                                }`}
                              />
                            )}
                            {!validationResults.MOBILE && (
                              <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-gray-100 text-black text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                Enter a valid phone number starting with + and
                                length between 4 and 15
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        id="secretid"
                        value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                      />

                      <div
                        id="REQUIRED_FIELD_TEXT"
                        changetype="REQUIRED_FIELD_TEXT"
                        name="SIGNUP_REQUIRED"
                      ></div>

                      <div className="mt-14">
                        <button
                          type="submit"
                          action="Save"
                          id="zcWebOptin"
                          name="SIGNUP_SUBMIT_BUTTON"
                          changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                          className="w-full super-primary rounded-full hover:shadow-lg text-white p-2"
                          disabled={
                            validationResults.COMPANYNAME &&
                            validationResults.MOBILE &&
                            validationResults.CONTACT_EMAIL
                              ? false
                              : true
                          }
                        >
                          {buttonLabel}
                        </button>
                      </div>
                      <input type="hidden" id="fieldBorder" value="" />
                      <input
                        type="hidden"
                        name="zc_trackCode"
                        id="zc_trackCode"
                        value="ZCFORMVIEW"
                      />
                      <input
                        type="hidden"
                        name="viewFrom"
                        id="viewFrom"
                        value="URL_ACTION"
                      />
                      <input
                        type="hidden"
                        id="submitType"
                        name="submitType"
                        value="optinCustomView"
                      />
                      <input
                        type="hidden"
                        id="lD"
                        name="lD"
                        value="122fd7fe7d014161"
                      />
                      <input
                        type="hidden"
                        name="emailReportId"
                        id="emailReportId"
                        value=""
                      />
                      <input
                        type="hidden"
                        name="zx"
                        id="cmpZuid"
                        value="1df9c8b68c"
                      />
                      <input type="hidden" name="zcvers" value="2.0" />
                      <input
                        type="hidden"
                        name="oldListIds"
                        id="allCheckedListIds"
                        value=""
                      />
                      <input
                        type="hidden"
                        id="mode"
                        name="mode"
                        value="OptinCreateView"
                      />
                      <input
                        type="hidden"
                        id="zcld"
                        name="zcld"
                        value="122fd7fe7d014161"
                      />
                      <input
                        type="hidden"
                        id="zctd"
                        name="zctd"
                        value="122fd7fe7cff2279"
                      />
                      <input type="hidden" id="document_domain" value="" />
                      <input
                        type="hidden"
                        id="zc_Url"
                        value="fpjb-zc1.maillist-manage.in"
                      />
                      <input
                        type="hidden"
                        id="new_optin_response_in"
                        value="0"
                      />
                      <input
                        type="hidden"
                        id="duplicate_optin_response_in"
                        value="0"
                      />
                      <input
                        type="hidden"
                        id="zc_formIx"
                        name="zc_formIx"
                        value="3z55f4139bdf0e6f89b17bb19c6f8da5100387094f3f588029eb5064caf6747ab8"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
