import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";
import { useNavigate } from "react-router-dom";

function ViewApplicantsModal({ clickHandler, isOpen, applicants }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    clickHandler();
  };
  //   const csvData = [
  //     ["firstname", "lastname", "email"],
  //     ["Ahmed", "Tomi", "ah@smthing.co.com"],
  //     ["Raed", "Labes", "rl@smthing.co.com"],
  //     ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  //   ];
  const navigate = useNavigate();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/[0.25] bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[550px] top-[150px] bg-white absolute px-[35px] py-8 border-style transition-all rounded-xl">
                <div className="flex flex-col justify-center items-center gap-[30px]">
                  <Dialog.Title
                    as="h3"
                    className="font-semibold text-[22px] leading-7 text-black "
                  >
                    Applied Applicants
                  </Dialog.Title>
                  <div className="flex flex-col gap-8 w-full">
                    {applicants.map((applicant, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between border border-slate-300 py-1.5 px-4 rounded-lg w-full items-center"
                        >
                          <p>
                            {applicant.firstName} {applicant.lastName}
                          </p>
                          <p
                            className="text-sm underline cursor-pointer text-[#0F74FF]"
                            onClick={() =>
                              navigate(`/student/${applicant?._id}`)
                            }
                          >
                            View Profile
                          </p>
                        </div>
                      );
                    })}
                    <CSVLink
                      data={applicants}
                      filename={"job_applicants.csv"}
                      className="m-auto shadow-2xl p-1.5 rounded-lg bg-lime-600 text-white"
                    >
                      Generate EXCEL Sheet
                    </CSVLink>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
export { ViewApplicantsModal };
