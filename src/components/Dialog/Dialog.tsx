import { forwardRef, useEffect } from "react";
// Components
import Animation, { AnimationProps } from "../Animation/Animation";
import Paper from "../Paper/Paper";
import Portal from "../Portal/Portal";
import Backdrop from "../Backdrop/Backdrop";
// Hooks
import usePresence from "../../hooks/usePresence";
import useAnimation from "../../hooks/useAnimation";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
// Context
import { DialogContextProvider } from "./DialogContext";
// Types
import {
  PrismaneWithInternal,
  PrismanePositions,
  PrismaneProps,
} from "../../types";
// Utils
import { strip, fr, variants } from "../../utils";

// Internal Components
import DialogHeader, { DialogHeaderProps } from "./DialogHeader/DialogHeader";
import DialogFooter, { DialogFooterProps } from "./DialogFooter/DialogFooter";

export { type DialogHeaderProps, type DialogFooterProps };

export type DialogProps = PrismaneProps<
  {
    position?: PrismanePositions;
    open?: boolean;
    closable?: boolean;
    onClose?: Function;
  },
  AnimationProps
>;

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      position = "top",
      open = false,
      closable,
      onClose = () => {},
      children,
      className,
      ...props
    },
    ref
  ) => {
    const { animate, animating, duration, timing } = useAnimation(
      open as boolean
    );

    const presence = usePresence(open as boolean, duration, animate);

    useKeyboardShortcut(["escape"], onClose, open);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [open]);

    return (
      <Portal>
        {presence && (
          <Animation
            as={Backdrop}
            animation="fade"
            animated={animating}
            duration={duration}
            timing={timing}
            onClick={onClose}
          >
            <Animation
              as={Paper}
              p={fr(4)}
              pos="fixed"
              t={variants(position, {
                "top-start": fr(6),
                top: fr(6),
                "top-end": fr(6),
                "right-start": fr(6),
                right: undefined,
                "right-end": undefined,
                "bottom-start": undefined,
                bottom: undefined,
                "bottom-end": undefined,
                "left-start": fr(6),
                left: undefined,
                "left-end": undefined,
              })}
              r={variants(position, {
                "top-start": undefined,
                top: undefined,
                "top-end": fr(6),
                "right-start": fr(6),
                right: fr(6),
                "right-end": fr(6),
                "bottom-start": undefined,
                bottom: undefined,
                "bottom-end": fr(6),
                "left-start": undefined,
                left: undefined,
                "left-end": undefined,
              })}
              l={variants(position, {
                "top-start": fr(6),
                top: undefined,
                "top-end": undefined,
                "right-start": undefined,
                right: undefined,
                "right-end": undefined,
                "bottom-start": fr(6),
                bottom: undefined,
                "bottom-end": undefined,
                "left-start": fr(6),
                left: fr(6),
                "left-end": fr(6),
              })}
              b={variants(position, {
                "top-start": undefined,
                top: undefined,
                "top-end": undefined,
                "right-start": undefined,
                right: undefined,
                "right-end": fr(6),
                "bottom-start": fr(6),
                bottom: fr(6),
                "bottom-end": fr(6),
                "left-start": undefined,
                left: undefined,
                "left-end": fr(6),
              })}
              z={200}
              animated={animating}
              duration={duration}
              timing={timing}
              animation="slide-up"
              className={strip(
                `${className ? className : ""} ${
                  open ? "PrismaneDialog-root-open" : ""
                } PrismaneDialog-root`
              )}
              data-testid="prismane-dialog"
              ref={ref}
              shadow
              {...props}
            >
              <DialogContextProvider value={{ open, closable, onClose }}>
                {children}
              </DialogContextProvider>
            </Animation>
          </Animation>
        )}
      </Portal>
    );
  }
) as PrismaneWithInternal<
  DialogProps,
  { Header: DialogHeaderProps; Footer: DialogFooterProps }
>;

Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export default Dialog;
