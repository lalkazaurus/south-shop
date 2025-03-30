import { useForm } from "react-hook-form";
import styles from "./Form.module.css"
import { useTranslation } from "react-i18next";
import OrderSummary from "./components/OrderSummary/OrderSummary";

type FormFields = {
    name: string,
    surname: string,
    phone_number: string,
    email: string,
    delivery: string,
    payment: string,
    receiver_phone_number: string,
    receiver_email: string,
    receiver_name: string,
    receiver_surname: string,
    comment: string
}

export default function Form() {
    const { t } = useTranslation();

    const {register, reset, handleSubmit, formState} = useForm<FormFields>({
        "mode": "onChange"
    })

    function onSubmit(data: FormFields) {
        console.log(data)
    }

    return (
        <div className={styles.globalContainer}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>{t("placing_order")}</h1>
                    <h2 className={styles.underTitle}>{t("contact_details")}</h2>
                    <form id="orderForm" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputContainer}>
                            <label>{t("phone_number")}</label>
                                <input {...register("phone_number", {
                                    required: "Phone number is required",
                                    pattern: {
                                            value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                                            message: "It has to be a phone number"
                                        }
                                    }
                                )}/>
                            </div>
                        <div className={styles.inputContainer}>
                            <label>{t("email")}</label>
                            <input {...register("email", {
                                required: "Email is required",
                                pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                        message: "It has to be an E-mail"
                                    }
                                }
                            )}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>{t("name")}</label>
                            <input {...register("name", { 
                                    required: "Name is required" ,
                                    pattern: {
                                        value: /^[\p{L}\p{M}]{2,}(?:[-' ][\p{L}\p{M}]{2,})*$/u,
                                        message: "It has to be a Name"
                                    }
                                }
                            )} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>{t("surname")}</label>
                            <input {...register("surname", 
                                { 
                                    required: "Surname is required",
                                    pattern: {
                                        value: /^[\p{L}\p{M}]{2,}(?:[-' ][\p{L}\p{M}]{2,})*$/u,
                                        message: "It has to be a Surname"
                                    }
                                }
                            )} />
                        </div>
                        <h2 className={styles.underTitle}>{t("delivery")}</h2>
                        <div className={styles.radioInputContainer}>
                            <div className={styles.radioInput}>
                                <input type="radio" value="Our market" {...register("delivery", {
                                    required: true
                                })}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("pickup")}</p>
                                        <span>{t("within")}</span>
                                    </div>
                                    <p className={styles.free}>{t("free")}</p>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="Post office" {...register("delivery")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("nova_post")}</p>
                                        <span>{t("average")}</span>
                                    </div>
                                    <p className={styles.price}>{t("order.carrier_rates")}</p>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="Nova Post" {...register("delivery")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("nova")}</p>
                                        <span>{t("average")}</span>
                                    </div>
                                    <p className={styles.price}>{t("order.carrier_rates")}</p>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="Сourier" {...register("delivery")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("courier")}</p>
                                        <span>{t("average")}</span>
                                    </div>
                                    <p className={styles.price}>{t("order.carrier_rates")}</p>
                                </div>
                            </div>
                        </div>

                        <h2 className={styles.underTitle}>{t("payment")}</h2>
                        <div className={styles.radioInputContainer}>
                            <div className={styles.radioInput}>
                                <input type="radio" value="receipt" {...register("payment", {
                                    required: true
                                })}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("receipt")}</p>
                                        <span>{t("postpaid")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="pay_now" {...register("payment")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("pay_now")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="seller" {...register("payment")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("seller")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="prepayment" {...register("payment")}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("prepayment")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.radioInput}>
                                <input type="radio" value="credit" {...register("payment", {
                                    required: true
                                })}/>
                                <div className={styles.radioInfo}>
                                    <div className={styles.radioMainText}>
                                        <p>{t("credit")}</p>
                                        <span>{t("loans")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className={styles.underTitle}>{t("receiver")}</h2>
                        <div className={styles.inputContainer}>
                            <label>{t("phone_number")}</label>
                                <input {...register("receiver_phone_number", {
                                    required: "Phone number is required",
                                    pattern: {
                                            value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                                            message: "It has to be a phone number"
                                        }
                                    }
                                )}/>
                            </div>
                        <div className={styles.inputContainer}>
                            <label>{t("email")}</label>
                            <input {...register("receiver_email", {
                                required: "Email is required",
                                pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                        message: "It has to be an E-mail"
                                    }
                                }
                            )}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>{t("name")}</label>
                            <input {...register("receiver_name", { 
                                    required: "Name is required" ,
                                    pattern: {
                                        value: /^[\p{L}\p{M}]{2,}(?:[-' ][\p{L}\p{M}]{2,})*$/u,
                                        message: "It has to be a Name"
                                    }
                                }
                            )} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>{t("surname")}</label>
                            <input {...register("surname", 
                                { 
                                    required: "Surname is required",
                                    pattern: {
                                        value: /^[\p{L}\p{M}]{2,}(?:[-' ][\p{L}\p{M}]{2,})*$/u,
                                        message: "It has to be a Surname"
                                    }
                                }
                            )} />
                        </div>
                        <div className={styles.textareaContainer}>
                            <p>{t("comment")}</p>
                            <textarea {...register("comment")}/>
                        </div>
                    </form>
                </div>
                <div className={styles.priceContainer}>
                <div className={styles.finalContainer}>
                    <h2 className={styles.finalTitle}>{t("order.total")}</h2>
                    <div className={styles.itemRow}>
                        <span>{t("order.item_count")}</span>
                        <span className={styles.price}>590 ₴</span>
                    </div>
                    <div className={styles.itemRow}>
                        <span>{t("order.delivery_cost")}</span>
                        <span className={styles.bold}>{t("order.carrier_rates")}</span>
                    </div>
                    <div className={styles.totalRow}>
                        <span>{t("order.to_pay")}</span>
                        <span className={styles.totalPrice}>590 ₴</span>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            const form = document.getElementById("orderForm") as HTMLFormElement;
                            form?.requestSubmit();
                        }}
                        className={styles.confirmButton}
                    >
                        {t("order.confirm_button")}
                    </button>
                    <button onClick={()=> reset()} className={styles.resetButton}>{t("reset")}</button>
                    <p className={styles.terms}>
                        {t("order.terms_acceptance")}
                        <br />
                        <a href="#">{t("order.privacy_policy")}</a>
                        <br />
                        <a href="#">{t("order.user_agreement")}</a>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}