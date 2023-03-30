import  {Navbar,  Link, Text, Dropdown, Input, Spacer} from "@nextui-org/react";
import Image from 'next/image'
import { Logo } from "./Logo.js";
import { SearchIcon } from "./SearchIcon.jsx";


const MyNavBar = () => {
  const collapseItems = [
    "Videojuegos",
    "¿Cómo comprar?",
    
  ];
  const buyIcon = 'https://res.cloudinary.com/dehsikb6h/image/upload/v1680202029/cachshoop/icons/icons8-buy_obhuis.gif'
  return (
    <>
      <Navbar isBordered variant="sticky" >
        <Navbar.Toggle showIn="xs" />
        <Spacer showIn="xs"/ >
        <Navbar.Brand hideIn="xs"
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          <Spacer />
          <Text b color="inherit" >
            CACHESHOOP
          </Text>
        </Navbar.Brand>
        
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">Videojuegos</Navbar.Link>
          <Navbar.Link isActive href="#">
            ¿Cómo comprar?
          </Navbar.Link>
          
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
            >
              
                <Input
                clearable
                contentLeft={
                  <SearchIcon fill="var(--nextui-colors-accents6)" size={30} />
                }
                contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$0",
                  dflex: "center",
                }
              }}
              placeholder="Search..."
            />
            </Navbar.Item>
          <Dropdown placement="bottom-right">
            
            <Navbar.Item>
              <Dropdown.Trigger>
                <Image
                  alt='icono de compra'
                  width={76}
                  height={46}
                  src={buyIcon}
                  as='buttom'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          <Spacer />
          <Text b color="inherit" >
            CACHESHOOP
          </Text>
        </Navbar.Brand>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default MyNavBar;