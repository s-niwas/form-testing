// @ts-nocheck
import { icons } from "../icons";
import React, { useState, useEffect } from "react";

interface FormData {
  FULLNAME: string;
  INSTITUTIONNAME: string;
  CONTACT_EMAIL: string;
  MOBILE: string;
  PLATFORM_FLAG: any;
}

interface ValidationResults {
  FULLNAME: boolean;
  INSTITUTIONNAME: boolean;
  CONTACT_EMAIL: boolean;
  MOBILE: boolean;
  PLATFORM_FLAG: boolean;
}

interface Props {
  buttonLabel: string;
  platformFlag: any;
}

function zcScptlessSubmit(parentNode: HTMLFormElement) {
  const zcSpmSubmitElement = document.querySelector("#zc_spmSubmit");
  if (zcSpmSubmitElement) {
    zcSpmSubmitElement.remove();
  }
  parentNode.submit();
}

export default function RawHtmlFormValidation(props: Props) {
  const [submit, setSubmit] = useState(false);
  let buttonClick = false;
  const [formData, setFormData] =
    useState<FormData>
      ({
        FULLNAME: "",
        INSTITUTIONNAME: "",
        CONTACT_EMAIL: "",
        MOBILE: "",
        PLATFORM_FLAG: props?.platformFlag,
      })
  const [validationResults, setValidationResults] = useState<ValidationResults>
    ({
      FULLNAME: true,
      INSTITUTIONNAME: true,
      CONTACT_EMAIL: true,
      MOBILE: true,
      PLATFORM_FLAG: true,
    })

  const handleButtonClick = () => {
    buttonClick = true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nameMappings: Record<string, string> = {
      CONTACT_CF5: "FULLNAME",
      CONTACT_CF2: "INSTITUTIONNAME",
      CONTACT_EMAIL: "CONTACT_EMAIL",
      CONTACT_CF6: "MOBILE",
      CONTACT_CF13: "PLATFORM_FLAG",
    };
    const mappedName = nameMappings[name] || name;
    setFormData({ ...formData, [mappedName]: value });
    setSubmit(true);
  };

  useEffect(() => {
    setValidationResults((prevResults) => ({
      ...prevResults,
      FULLNAME:
        formData.FULLNAME.length > 3 &&
        formData.FULLNAME !== formData.INSTITUTIONNAME,
    }));

    setValidationResults((prevResults) => ({
      ...prevResults,
      INSTITUTIONNAME:
        formData.INSTITUTIONNAME.length > 3 &&
        formData.FULLNAME !== formData.INSTITUTIONNAME,
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

    setValidationResults((prevResults) => ({
      ...prevResults,
      PLATFORM_FLAG: formData.PLATFORM_FLAG !== null,
    }));
  }, [formData]);

  const handleSubmit = () => {
    setSubmit(false);
    setValidationResults(() => ({
      FULLNAME: true,
      INSTITUTIONNAME: true,
      CONTACT_EMAIL: true,
      MOBILE: true,
      PLATFORM_FLAG: true,
    }));
    setFormData({
      FULLNAME: "",
      INSTITUTIONNAME: "",
      CONTACT_EMAIL: "",
      MOBILE: "",
      PLATFORM_FLAG: props?.platformFlag,
    });
  };

  return (

    <div
      id="sf3z052db21e08aaf76fe836bc0137fb6f3f910335f2359704f6729eb3f9f2f45748"
      data-type="signupform"
    >
      <div id="customForm">
        <input type="hidden" id="recapTheme" value="2" />
        <input type="hidden" id="isRecapIntegDone" value="false" />
        <input type="hidden" id="signupFormMode" value="copyCode" />
        <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
        <input type="hidden" id="recapModeTheme" value="" />
        <input type="hidden" id="signupFormMode" value="copyCode" />
        <div name="SIGNUP_PAGE" className="large_form_5_css" id="SIGNUP_PAGE">
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
            <div className="pt-0">
              <form
                method="POST"
                id="zcampaignOptinForm"
                action="https://fpjb-zc1.maillist-manage.in/weboptin.zc"
                target="_blank" onSubmit={() => zcScptlessSubmit(this)}
              >
                <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                  <div id="SIGNUP_BODY" name="SIGNUP_BODY">
                    {props?.formContent}
                    <div>
                      <div>
                        <div name="fieldsdivSf" className="zcsffieldsdiv">
                          <div className="zcsffield mb-6 flex items-center border-b-2">
                            <div name="SIGNUP_FORM_LABEL">
                              <img
                                src={icons.person.src}
                                width={icons.person.width}
                                height={icons.person.height}
                                alt="Contact number Icon"
                              />
                            </div>
                            <input
                              name="CONTACT_CF5"
                              changeitem="SIGNUP_FORM_FIELD"
                              maxLength={100}
                              type="text"
                              className="input"
                              placeholder="Full Name"
                              minLength={3}
                              required
                              onChange={handleInputChange}
                              value={formData?.FULLNAME}
                            />
                            <div className="tooltip-form relative group inline-block">
                              {submit && formData.FULLNAME && (
                                <img
                                  src={
                                    validationResults.FULLNAME
                                      ? icons.valid.src
                                      : icons.invalid.src
                                  }
                                  width={18}
                                  height={18}
                                  alt="validation-icon"
                                  className={`${!validationResults.FULLNAME
                                    ? "cursor-pointer"
                                    : ""
                                    }`}
                                />
                              )}
                              {!validationResults.FULLNAME && (
                                <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-neutral-gray text-white text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                  {validationResults.FULLNAME ===
                                    validationResults.INSTITUTIONNAME
                                    ? "Name and Institute name should be different"
                                    : "Minimum 3 characters required"}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="zcsffield mb-6 flex items-center border-b-2">
                          <div name="SIGNUP_FORM_LABEL">
                            <img
                              src={icons.institution.src}
                              width={icons.institution.width}
                              height={icons.institution.height}
                              alt="Institution Icon"
                            />
                          </div>
                          <input
                            name="CONTACT_CF2"
                            changeitem="SIGNUP_FORM_FIELD"
                            maxLength={100}
                            type="text"
                            className="input"
                            placeholder="Institution Name"
                            minLength={3}
                            required
                            onChange={handleInputChange}
                            value={formData.INSTITUTIONNAME}
                          />
                          <div className="tooltip-form relative group inline-block">
                            {submit && formData.INSTITUTIONNAME && (
                              <img
                                src={
                                  validationResults.INSTITUTIONNAME
                                    ? icons.valid.src
                                    : icons.invalid.src
                                }
                                width={18}
                                height={18}
                                alt="validation-icon"
                                className={`${!validationResults.INSTITUTIONNAME
                                  ? "cursor-pointer"
                                  : ""
                                  }`}
                              />
                            )}
                            {!validationResults.INSTITUTIONNAME && (
                              <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-neutral-gray text-white text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                {validationResults.FULLNAME ===
                                  validationResults.INSTITUTIONNAME
                                  ? "Name and Institute name should be different"
                                  : "Minimum 3 characters required"}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="zcsffield mb-6 flex items-center border-b-2">
                          <div name="SIGNUP_FORM_LABEL">
                            <img
                              src={icons.email.src}
                              width={icons.email.width}
                              height={icons.email.height}
                              alt="Email Icon"
                            />
                          </div>
                          <input
                            name="CONTACT_EMAIL"
                            changeitem="SIGNUP_FORM_FIELD"
                            maxLength={100}
                            type="email"
                            className="input"
                            required
                            placeholder="Organisation Email"
                            onChange={handleInputChange}
                            value={formData.CONTACT_EMAIL}
                          />
                          <div className="tooltip-form relative group inline-block">
                            {submit && formData.CONTACT_EMAIL && (
                              <img
                                src={
                                  validationResults.CONTACT_EMAIL
                                    ? icons.valid.src
                                    : icons.invalid.src
                                }
                                width={18}
                                height={18}
                                alt="validation-icon"
                                className={`${!validationResults.CONTACT_EMAIL
                                  ? "cursor-pointer"
                                  : ""
                                  }`}
                              />
                            )}
                            {!validationResults.CONTACT_EMAIL && (
                              <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-neutral-gray text-white text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                Enter a valid email address
                              </span>
                            )}
                          </div>
                        </div>
                        <div className=" zcsffield flex items-center border-b-2">
                          <div name="SIGNUP_FORM_LABEL">
                            <img
                              src={icons.mobile.src}
                              width={icons.mobile.width}
                              height={icons.mobile.height}
                              alt="Contact number Icon"
                            />
                          </div>
                          <input
                            name="CONTACT_CF6"
                            changeitem="SIGNUP_FORM_FIELD"
                            maxLength={15}
                            type="text"
                            className="input"
                            required
                            minLength={4}
                            placeholder="Contact Number"
                            onChange={handleInputChange}
                            value={formData.MOBILE}
                          />
                          <div className="tooltip-form relative inline-block group">
                            {submit && formData.MOBILE && (
                              <img
                                src={
                                  validationResults.MOBILE
                                    ? icons.valid.src
                                    : icons.invalid.src
                                }
                                width={18}
                                height={18}
                                alt="validation-icon"
                                className={`${!validationResults.MOBILE
                                  ? "cursor-pointer"
                                  : ""
                                  }`}
                              />
                            )}
                            {!validationResults.MOBILE && (
                              <span className="tooltiptext-form z-10 hidden group-hover:block group-hover:opacity-100 bg-neutral-gray text-white text-center p-2 border border-1 absolute mt-1 -ml-12 w-24 md:w-40 opacity-0 text-xs">
                                Enter a valid phone number starting with +
                                and length between 4 and 15
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="zcsffield hidden flex items-center border-b-2">
                          <div name="SIGNUP_FORM_LABEL"></div>
                          <input
                            name="CONTACT_CF13"
                            changeitem="SIGNUP_FORM_FIELD"
                            maxLength={100}
                            type="text"
                            className="input"
                            required
                            placeholder="Platform-flag"
                            onChange={handleInputChange}
                            value={formData.PLATFORM_FLAG}
                          />
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
                            validationResults.FULLNAME &&
                              validationResults.INSTITUTIONNAME &&
                              validationResults.MOBILE &&
                              validationResults.CONTACT_EMAIL
                              ? false
                              : true
                          }
                        >
                          {props?.buttonLabel}
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
                        value="122fd7fe7d034d1c"
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
                        value="122fd7fe7d034d1c"
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
                        value="1"
                      />
                      <input
                        type="hidden"
                        id="duplicate_optin_response_in"
                        value="1"
                      />
                      <input
                        type="hidden"
                        id="zc_formIx"
                        name="zc_formIx"
                        value="3z052db21e08aaf76fe836bc0137fb6f3f910335f2359704f6729eb3f9f2f45748"
                      />
                    </div>
                  </div>
                  <input type="hidden" id="isCaptchaNeeded" value="false" />
                  <input type="hidden" id="superAdminCap" value="0" />
                </div>
                <input type="hidden" id="scriptless" name="scriptless" value="yes" />
                <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />

              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="zcOptinOverLay"
        onContextMenu={(e) => e.preventDefault()}
        style={{
          display: "none",
          textAlign: "center",
          backgroundColor: "rgb(0, 0, 0)",
          opacity: 0.5,
          zIndex: 100,
          position: "fixed",
          width: "100%",
          top: "0px",
          left: "0px",
          height: "988px",
        }}
      ></div>
      <div
        id="zcOptinSuccessPopup"
        style={{
          display: "none",
          zIndex: 9999,
          width: "800px",
          height: "40%",
          top: "84px",
          position: "fixed",
          left: "26%",
          backgroundColor: "#FFFFFF",
          borderColor: "#E6E6E6",
          borderStyle: "solid",
          borderWidth: "1px",
          boxShadow: "0 1px 10px #424242",
          padding: "35px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-16px",
            right: "-14px",
            zIndex: 99999,
            cursor: "pointer",
          }}
          id="closeSuccess"
        >
          <img src="https://fpjb-zc1.maillist-manage.in/images/videoclose.png" alt="close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
}
