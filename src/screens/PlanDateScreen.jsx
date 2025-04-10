import { useState } from "react";
export default function PlanDateScreen({ onBack, lang, t }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ideaIndex, setIdeaIndex] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const ideas = [
    { emoji: "🎬", title: t[lang].idea1, desc: t[lang].idea1desc, type: "movie" },
    { emoji: "🚶", title: t[lang].idea2, desc: t[lang].idea2desc, type: "walk" },
    { emoji: "🧑‍🍳", title: t[lang].idea3, desc: t[lang].idea3desc, type: "cook" }
  ];

  const idea = ideas[ideaIndex];

  const save = () => {
    const all = JSON.parse(localStorage.getItem("loveloop_dates") || "[]");
    all.push({ date, time, idea });
    localStorage.setItem("loveloop_dates", JSON.stringify(all));
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center px-6 py-10">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-pink-600 mb-4">{t[lang].generator}</h2>
        <div className="text-3xl mb-2">{idea.emoji}</div>
        <div className="font-semibold mb-1">{idea.title}</div>
        <p className="text-gray-600 text-sm mb-4">{idea.desc}</p>
        <button onClick={() => setIdeaIndex((ideaIndex + 1) % ideas.length)} className="text-pink-500 text-sm underline mb-6">
          {t[lang].anotheridea}
        </button>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mb-3 w-full px-4 py-2 border rounded-xl" />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mb-6 w-full px-4 py-2 border rounded-xl" />
        <button onClick={save} disabled={!date || !time} className="bg-pink-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-pink-600 transition">
          {t[lang].confirm}
        </button>
        {confirmed && <p className="text-sm text-green-600 mt-3">{t[lang].planned}</p>}
        <button onClick={onBack} className="mt-4 text-pink-500 text-sm hover:underline">
          ← {t[lang].back}
        </button>
      </div>
    </div>
  );
}