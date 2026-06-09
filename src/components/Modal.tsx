"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  function handleClose() {
    onClose();
    setTimeout(() => { setDone(false); setEmail(""); setError(false); }, 300);
  }

  function handleSubmit() {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    setDone(true);
  }

  return (
    <div
      className={`modal-back${isOpen ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      aria-modal="true"
      role="dialog"
      aria-label="開発通知を受け取る"
    >
      <div className="modal">
        <button className="x" onClick={handleClose} aria-label="閉じる">✕</button>

        <div className={`modal-form${done ? " hide" : ""}`}>
          <Image className="mpaw" src="/assets/paw.png" alt="" width={64} height={64} />
          <h3>開発通知を受け取る</h3>
          <p className="msub">リリース前のお知らせを、いちばんにお届けします。</p>
          <label htmlFor="modal-email">メールアドレス</label>
          <input
            ref={inputRef}
            id="modal-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(false); }}
            onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
            placeholder="you@example.com"
            autoComplete="email"
            className={error ? "error" : ""}
          />
          <button className="btn btn-primary" style={{ width: "100%" }} onClick={handleSubmit}>
            <Image className="pawicon" src="/assets/paw.png" alt="" width={26} height={26} />
            ぽんっと登録する
          </button>
          <p className="fine">登録は開発状況のお知らせのみに使用します。</p>
        </div>

        <div className={`modal-done${done ? " show" : ""}`}>
          <div className="big">🐾</div>
          <h3>ありがとうございます！</h3>
          <p className="msub" style={{ marginBottom: 0 }}>
            準備ができたら、いちばんにお知らせします。<br />
            合図が届くのを、楽しみに待っていてくださいね。
          </p>
        </div>
      </div>
    </div>
  );
}
