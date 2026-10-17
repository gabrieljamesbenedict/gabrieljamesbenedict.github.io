import { useEffect, useRef, useState } from "react";
import "../styles/BackgroundPicker.css";
import type { BackgroundOption } from "../data/BackgroundData";

interface BackgroundPickerProps {
  options: BackgroundOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  reduceMotion: boolean;
}

const GROUP_LABELS: Record<BackgroundOption["kind"], string> = {
  vanta: "Animated (WebGL)",
  css: "CSS",
  solid: "Solid",
  off: "None",
};

const groupByKind = (options: BackgroundOption[]) => {
  const order: BackgroundOption["kind"][] = ["vanta", "css", "solid", "off"];
  return order
    .map((kind) => ({ kind, items: options.filter((option) => option.kind === kind) }))
    .filter((group) => group.items.length > 0);
};

const BackgroundPicker = ({
  options,
  selectedId,
  onSelect,
  reduceMotion,
}: BackgroundPickerProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const groups = groupByKind(options);

  return (
    <div className="bg-picker" ref={rootRef}>
      <button
        type="button"
        className={`bg-picker__toggle${open ? " bg-picker__toggle--open" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change background"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="bg-picker__swatch" aria-hidden="true" />
      </button>

      {open && (
        <div className="bg-picker__popover" role="menu" aria-label="Background options">
          <p className="bg-picker__heading">Background</p>
          {reduceMotion && (
            <p className="bg-picker__note">
              Animated backgrounds are disabled by your reduced-motion setting.
            </p>
          )}
          {groups.map((group) => (
            <div key={group.kind} className="bg-picker__group">
              <p className="bg-picker__group-label">{GROUP_LABELS[group.kind]}</p>
              <div className="bg-picker__items">
                {group.items.map((option) => {
                  const disabled = reduceMotion && option.kind === "vanta";
                  const isSelected = option.id === selectedId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isSelected}
                      disabled={disabled}
                      className={`bg-picker__item${isSelected ? " bg-picker__item--active" : ""}`}
                      onClick={() => {
                        onSelect(option.id);
                        setOpen(false);
                      }}
                    >
                      <span
                        className={`bg-picker__dot bg-picker__dot--${group.kind}`}
                        style={option.color ? { backgroundColor: option.color } : undefined}
                        aria-hidden="true"
                      />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundPicker;
