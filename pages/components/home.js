import React, { useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import { Input } from "postcss";

function Main() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

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

            <ClientDetails clientName={clientName} clientAddress={clientAddress} />

            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <Table />

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
              <label htmlFor="name" className="font-bold">
                {" "}
                Enter your name{" "}
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address" className="font-bold">
                {" "}
                Enter your Address{" "}
              </label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email" className="font-bold">
                {" "}
                Enter your email{" "}
              </label>
              <input
                type="email"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="website" className="font-bold">
                {" "}
                Enter your website{" "}
              </label>
              <input
                type="email"
                name="website"
                id="website"
                placeholder="Enter your website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              <label htmlFor="phone" className="font-bold">
                {" "}
                Enter your phone number{" "}
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName" className="font-bold">
                {" "}
                Enter your bank name{" "}
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount" className="font-bold">
                {" "}
                Enter your bank account number{" "}
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bank account number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName" className="font-bold">
                {" "}
                Enter your Client name{" "}
              </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your bank client name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress" className="font-bold">
                {" "}
                Enter your Client Address{" "}
              </label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your bank client name"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber" className="font-bold">
                {" "}
                Invoice number{" "}
              </label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate" className="font-bold">
                {" "}
                Invoice Date{" "}
              </label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate" className="font-bold">
                {" "}
                Due Date{" "}
              </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="dueDate" className="font-bold">
                {" "}
                Additional Notes{" "}
              </label>

              <textarea
                name="notes "
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 py-2 px-8 font-bold rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 transition-all duration-300"
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
