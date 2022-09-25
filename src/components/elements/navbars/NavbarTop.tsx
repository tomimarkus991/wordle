import { useState } from "react";
import { IoMdSettings } from "react-icons/io";

import { animations, AnimationWrapper, Modal, ModalFooterContainer, ModalHeader } from "components";

export const NavbarTop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[1020] mb-3 flex h-8 w-full items-center bg-slate-50 py-6">
      <div className="flex flex-1 items-center justify-between px-4">
        <p className="cursor-default text-2xl font-semibold text-gray-800">Sõnake</p>
        <AnimationWrapper keyIndex="settings" animateOnAllScreens variants={animations.rotate360}>
          <Modal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            maxWidth="lg"
            modalButton={
              <IoMdSettings
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 cursor-not-allowed fill-slate-800 hover:fill-slate-900"
              />
            }
          >
            <ModalHeader setOpen={() => setIsModalOpen(false)} type="close">
              Settings
            </ModalHeader>
            <div className="flex items-center justify-center">
              <select>
                <option value="est">Eesti</option>
                <option value="ger">Deutsch</option>
                <option value="eng">English</option>
              </select>
              <select>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <ModalFooterContainer>
              <div></div>
            </ModalFooterContainer>
          </Modal>
        </AnimationWrapper>
      </div>
    </div>
  );
};
