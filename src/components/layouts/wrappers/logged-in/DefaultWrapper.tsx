import clsx from "clsx";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";

import {
  NavbarTop,
  Sidebar,
  animations,
  AnimationWrapper,
  Modal,
  ModalFooterContainer,
  ModalHeader,
} from "components";
import { useSidebar } from "context";
import { useIsMobile } from "hooks";

interface Props {
  children: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const DefaultWrapper = ({ children, rightSide }: Props) => {
  const { isMobile } = useIsMobile();
  const { sidebarState } = useSidebar();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isMobile ? (
        <>
          <div
            id="main-content"
            className={clsx(
              "flex min-h-screen min-w-full justify-center bg-slate-50",
              sidebarState === "openWithOverlay" && "h-[100vh] overflow-hidden"
            )}
          >
            <div className="flex h-full w-full flex-col">
              <NavbarTop />
              <div className="px-4">{children}</div>
              {/* <NavbarBottom /> */}
            </div>
          </div>
          <Sidebar />
        </>
      ) : (
        <div id="main-content" className="flex min-h-screen w-full bg-slate-50">
          <div className="flex justify-start">{/* <Sidebar /> */}</div>
          <div className="m-auto w-full py-8 px-6">
            <div className="flex items-center justify-center">
              <div className="flex max-w-2xl flex-1 items-center justify-between px-4">
                <p className="cursor-default text-2xl font-semibold text-gray-800">Sõnake</p>
                <AnimationWrapper
                  keyIndex="settings"
                  animateOnAllScreens
                  variants={animations.rotate360}
                >
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
            {children}
          </div>
          {rightSide && (
            <div className="hidden min-w-[20rem] flex-col items-center py-8 px-4 xl:flex 2xl:min-w-[24rem]">
              {rightSide}
            </div>
          )}
        </div>
      )}
    </>
  );
};
