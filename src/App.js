import { useState } from 'react';
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => {
    setMenuAberto(true);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      <header>
        <div className="interface">
          <div className="logo">
            <a href="#">
              <img src="/images/logo_Image_13_de_jan._de_2026__20_11_53-removebg-preview.png" alt="Logo da Agência BRN" />
            </a>
          </div>

          <nav className="menu-desktop">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Especialidades</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Projetos</a></li>
            </ul>
          </nav>

          <div className="btn-contato">
            <a href="#">
              <button>Contato</button>
            </a>
          </div>

          <div className="btn-abrir-menu" id="btn-menu" onClick={abrirMenu}>
            <i className="bi bi-list"></i>
          </div>

          <div className={`menu-mobile ${menuAberto ? 'abrir-menu' : ''}`} id="menu-mobile">
            <div className="btn-fechar" onClick={fecharMenu}>
              <i className="bi bi-x-lg"></i>
            </div>

            <nav>
              <ul>
                <li><a href="#" onClick={fecharMenu}>Início</a></li>
                <li><a href="#" onClick={fecharMenu}>Especialidades</a></li>
                <li><a href="#" onClick={fecharMenu}>Sobre</a></li>
                <li><a href="#" onClick={fecharMenu}>Projetos</a></li>
                <li><a href="#" onClick={fecharMenu}>Contato</a></li>
              </ul>
            </nav>
          </div>
          
          <div className={`overlay-menu ${menuAberto ? 'abrir-menu' : ''}`} id="overlay-menu" onClick={fecharMenu}></div>
        </div>
      </header>

      <main>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">
                <h1>TRANSFORMANDO PROBLEMAS EM SOLUÇÕES<span>.</span></h1>
                <p>Utilizando tecnologia de forma estratégica para transformar problemas em soluções eficientes.</p>

                <div className="btn-contato">
                  <a href="#">
                    <button>Entre em contato</button>
                  </a>
                </div>
              </div>

              <div className="img-topo-site">
                <img src="/images/man Image 13 de jan. de 2026, 20_44_52 (1).png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="especiliadades">
          <div className="interface">
            <h2 className="titulo">MINHAS <span>HABILIDADES.</span></h2>
            <div className="flex">
              <div className="especialidades-box">
                <i className="bi bi-code-square"></i>
                <h3>Desenvolvimento Python</h3>
                <p>Desenvolvimento de aplicações robustas utilizando Python e Django, com foco em boas práticas, segurança e escalabilidade</p>
              </div>

              <div className="especialidades-box">
                <i className="bi bi-database"></i>
                <h3>Dados</h3>
                <p>Análise e manipulação de dados para geração de insights, utilizando Python, SQL e visualização orientada à tomada de decisão.</p>
              </div>

              <div className="especialidades-box">
                <i className="bi bi-filetype-js"></i>
                <h3>Front-end</h3>
                <p>Desenvolvimento de interfaces modernas e responsivas com HTML, CSS, JavaScript, Bootstrap e TailwindCSS.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sobre">
          <div className="interface">
            <div className="flex">
              <div className="img-sobre">
                <img src="/images/foto.png" alt="" />
              </div>

              <div className="txt-sobre">
                <h2>MUITO PRAZER, <span>SOU PEDRO DOURADO.</span></h2>
                <p>Atualmente atuo como aprendiz de dados, auxiliando no desenvolvimento de aplicações em Python
                  utilizando frameworks como Django e FastAPI. Faço parte de um time ágil, aplicando diariamente
                  práticas como Scrum (dailys, sprints) e Kanban (gestão de backlog). Também possuo experiência no
                  uso de ferramentas de apoio à gestão ágil, como o Jira, além de conhecimentos em bancos de
                  dados(SQL).</p>
                <p>Atualmente estou desenvolvendo uma página de changelogs para uma aplicação já existente na
                  empresa. Essa solução será responsável por informar os colaboradores sobre atualizações, notícias
                  internas, publicações de BIs e dashboards, centralizando informações e fortalecendo a comunicação
                  organizacional.</p>
                <div className="btn-social">
                  <a href="https://github.com/PedroDourado352" target="_blank" rel="noopener noreferrer">
                    <button><i className="bi bi-github"></i></button>
                  </a>
                  <a href="https://www.linkedin.com/in/pedro-dourado-3384b5252/" target="_blank" rel="noopener noreferrer">
                    <button><i className="bi bi-linkedin"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio">
          <div className="interface">
            <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
            <div className="flex">
              <div className="img-port" style={{backgroundImage: 'url(/images/imagem.jpg)'}}>
                <div className="overlay">Projeto 1</div>
              </div>
              <div className="img-port" style={{backgroundImage: 'url(/images/imagem.jpg)'}}>
                <div className="overlay">Projeto 2</div>
              </div>
              <div className="img-port" style={{backgroundImage: 'url(/images/imagem.jpg)'}}>
                <div className="overlay">Projeto 3</div>
              </div>
            </div>
          </div>
        </section>

        <section className="formulario">
          <div className="interface">
            <h2 className="titulo">FALA <span>COMIGO.</span></h2>

            <form action="">
              <input type="text" name="" id="" placeholder="Seu nome completo:" required />
              <input type="text" name="" id="" placeholder="Seu e-mail:" required />
              <input type="text" name="" id="" placeholder="Seu celular:" />
              <textarea name="" id="" placeholder="Sua mensagem" required></textarea>
              <div className="btn-enviar"><input type="submit" value="ENVIAR" /></div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="interface">
          <div className="line-footer">
            <div className="flex">
              <div className="logo-footer">
                <img src="/images/logo_Image_13_de_jan._de_2026__20_11_53-removebg-preview.png" alt="Logotipo Agência BRN" />
              </div>
              <div className="btn-social">
                <a href="https://github.com/PedroDourado352" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-github"></i></button>
                </a>
                <a href="https://www.linkedin.com/in/pedro-dourado-3384b5252/" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-linkedin"></i></button>
                </a>
              </div>
            </div>
          </div>

          <div className="line-footer borda">
            <p className="email"><i className="bi bi-envelope-fill"></i> phdourado4@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
