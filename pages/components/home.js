import React, { useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import TableForm from "./TableForm";

function Main() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, setName] = useState("Sambulo Senda");
  const [address, setAddress] = useState("49 west street");
  const [email, setEmail] = useState("sambulosendas@gmail.com");
  const [phone, setPhone] = useState("0783456789");
  const [bankName, setBankName] = useState("Baclays");
  const [bankAccount, setBankAccount] = useState("932038392");
  const [website, setWebsite] = useState("sambulosendas.com");
  const [clientName, setClientName] = useState("Ben moyo Senda");
  const [clientAddress, setClientAddress] = useState("sam@gmail.com");
  const [invoiceNumber, setInvoiceNumber] = useState("32932");
  const [dueDate, setDueDate] = useState("20/12/2020");
  const [invoiceDate, setInvoiceDate] = useState("20/12/2020");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className=" p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table description={description} quantity={quantity}  unitPrice={unitPrice} amount={amount}  />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankName={bankName}
              bankAccount={bankAccount}
            />
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 py-2 px-8 font-bold rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-bold">
                    {" "}
                    Enter your full name{" "}
                  </label>
                  <input
                    type="text"
                    name="text"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address" className="font-bold">
                    {" "}
                    Enter your Address{" "}
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    name="text"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold">
                    {" "}
                    Enter your email{" "}
                  </label>
                  <input
                    type="email"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website" className="font-bold">
                    {" "}
                    Enter your website{" "}
                  </label>
                  <input
                    type="email"
                    className="bg-gray-200 p-2 mb-3 rounded border-2"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-bold">
                    {" "}
                    Enter your phone number{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="bg-gray-200 p-2 mb-3 rounded border-2"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName" className="font-bold">
                    {" "}
                    Enter your bank name{" "}
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>{" "}
                <div className="flex flex-col">
                  <label htmlFor="bankAccount" className="font-bold">
                    {" "}
                    Enter your bank account number{" "}
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 mt-20">
                <div className="flex flex-col">
                  <label htmlFor="clientName" className="font-bold">
                    {" "}
                    Enter your Client name{" "}
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="clientName"
                    placeholder="Enter your bank client name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress" className="font-bold">
                    {" "}
                    Enter your Client Address{" "}
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="clientAddress"
                    placeholder="Enter your bank client name"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber" className="font-bold">
                    {" "}
                    Invoice number{" "}
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    className="bg-gray-200 p-2  mb-3 rounded border-2 "
                    placeholder="Invoice number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate" className="font-bold">
                    {" "}
                    Invoice Date{" "}
                  </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate" className="font-bold">
                    {" "}
                    Due Date{" "}
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    className="bg-gray-200 p-2 mb-3 rounded border-2 "
                    id="dueDate"
                    placeholder="Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm 
                description={description}
                 setDescription={setDescription}
                 quantity={quantity}
                 setQuantity={setQuantity}
                 unitPrice={unitPrice}
                 setUnitPrice={setUnitPrice}
                 amount={amount}
                 setAmount={setAmount}
                 
                 
                 />
              </article>

              <label htmlFor="additionalInfo" className="font-bold">
                {" "}
                Additional Notes{" "}
              </label>

              <textarea
                name="notes "
                id="notes"
                cols="30"
                className="bg-gray-200 p-2 mb-3 rounded border-2 "
                rows="10"
                placeholder="Additional notes to client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 py-2 mb-3  px-8 font-bold rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Main;
