import "./listChat.css";
import Chat from "./chat.js";
export default function ListChat() {
  return (
    <div className="ListChat">
      <div className="headerListChat">
        <h1>Chat</h1>
        <svg
          viewBox="0 0 36 36"
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
          fill="currentColor"
          height="28"
          width="28">
          <path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path>
          <path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path>
        </svg>
      </div>
      <div className="searchBox">
        <label>
          <svg
            fill="currentColor"
            viewBox="6 6 24 24"
            width="1em"
            height="1em"
            class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy x1qx5ct2 xw4jnvo"
            overflow="visible">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.522 21.662c-.389-.344-.443-.925-.181-1.373a8.5 8.5 0 1 0-3.051 3.051c.447-.261 1.028-.207 1.372.182l3.608 4.073a1.647 1.647 0 1 0 2.325-2.326l-4.073-3.607zm-3.28-9.905a6 6 0 1 1-8.484 8.486 6 6 0 0 1 8.485-8.486z"></path>
          </svg>
        </label>
        <input type="text" placeholder="Tìm kiếm trên Messenger"></input>

        <button>
          <svg
            fill="currentColor"
            viewBox="6 6 24 24"
            width="1em"
            height="1em"
            class="x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy xlup9mm x1kky2od"
            overflow="visible">
            <path d="m12.631 25.138 5.196-5.189a.25.25 0 0 1 .353 0l5.197 5.189a1.241 1.241 0 0 0 1.76 0 1.241 1.241 0 0 0 0-1.761L19.95 18.18a.25.25 0 0 1 0-.354l5.188-5.196a1.241 1.241 0 0 0 0-1.76 1.241 1.241 0 0 0-1.76 0l-5.197 5.188a.25.25 0 0 1-.353 0l-5.196-5.189a1.241 1.241 0 0 0-1.76 0 1.241 1.241 0 0 0 0 1.761l5.188 5.196a.25.25 0 0 1 0 .354l-5.189 5.196a1.241 1.241 0 0 0 0 1.76 1.241 1.241 0 0 0 1.761 0z"></path>
          </svg>
        </button>
      </div>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
}
