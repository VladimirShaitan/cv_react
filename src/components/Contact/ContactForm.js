import React from "react";
import InputDefault from "../FormInputs/InputDefault";
import Textarea from "../FormInputs/Textarea";
import Button from "../Certificates/Button";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            successMessage: {
                color: '#FF0077',
                border: '3px solid',
                padding: '20px 0',
                textAlign: 'center',
                fontSize: '25px'
            }
        }


        this.inputs = [
            {
                name: "contactName",
                required: true,
                type: 'text',
                id: "contactName",
                placeholder: "Name"
            },
            {
                name: "contactEmail",
                required: true,
                type: "email",
                id: "contactEmail",
                placeholder: "Email"
            },
            {
                name: "contactSubject",
                required: true,
                type: "text",
                id: "contactSubject",
                placeholder: "Subject"
            },
        ];
        this.bot = {
            token: '1129483343:AAHH9pydDOdFYucj7BRzluMgR1R4xkIieIw',
            chatId: '-453410566'
        }

        this.state = {
            inputFields: null,
            sendMessage: false,
            contactForm: null,
            formInputs: {
                contactName: '',
                contactEmail: '',
                contactSubject: '',
                contactMessage: ''
            }
        }

        this.inputChange = this.inputChange.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.checkContactForm = this.checkContactForm.bind(this);
    }

    async componentDidMount() {
        if (Boolean(localStorage.getItem('sendMessage'))) {
            this.setState({
                sendMessage: Boolean(localStorage.getItem('sendMessage'))
            });
        }

        await this.setState({
            inputFields: this.inputs.map((field, index) => {
                return (
                    <InputDefault
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        id={field.id}
                        placeholder={field.placeholder}
                        inputChange={this.inputChange}
                        key={index}
                    />
                )
            }),

        });

        await this.checkContactForm()
        console.log(this.state.contactForm)
    }
    async checkContactForm () {
        let contact = null;
        if(!this.state.sendMessage) {
            contact = <form
                    data-v-if=""
                    onSubmit={this.sendRequest}
                    name="contactForm"
                    id="contactForm"
                    method="post"
                    action=""
                    data-novalidate="novalidate"
                >
                    <fieldset>
                        {this.state.inputFields}
                        <Textarea
                            name="contactMessage"
                            required={true}
                            id="contactMessage"
                            placeholder="message"
                            rows="10"
                            cols="50"
                            inputChange={this.inputChange}
                        />

                        <Button />

                    </fieldset>
                </form>

        } else {
            contact = <div style={this.styles.successMessage}>Hey you, I will answer ASAP, Thanks for request!</div>
        }

        this.setState({
            contactForm: contact
        })
    }
    async sendRequest(event) {
        event.preventDefault();

        const message =  `<b><i>New message from your'e site</i></b>%0A%0A<b>Name:</b> %0A<i>${this.state.formInputs.contactName}</i>%0A%0A<b>Email:</b> %0A<i>${this.state.formInputs.contactEmail}</i>%0A%0A<b>Subject:</b> %0A<i>${this.state.formInputs.contactSubject}</i>%0A%0A<b>Message:</b> %0A<i>${this.state.formInputs.contactMessage}</i>%0A%0AThanks for attention :)`;
        const requestBody = `https://api.telegram.org/bot${this.bot.token}/sendMessage?chat_id=${this.bot.chatId}&parse_mode=html&text=${message}&parse_mode=HTML`;
        let data = {element: "barium"};

        fetch(requestBody, {
            method: "POST",
        }).then(() => {
            this.setState({
                sendMessage: true
            });
            this.checkContactForm();
            localStorage.setItem('sendMessage', 'true');
        });
    }
    inputChange({target}) {
        let formInputs = this.state.formInputs;
        formInputs[target.name] = target.value;
        this.setState({formInputs})
    }


    render() {
        return (
            <div className="row contact-form">
                <div className="col-twelve">
                    {this.state.contactForm}
                </div>
            </div>
        )
    }
}

export default ContactForm;