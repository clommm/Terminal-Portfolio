import React from 'react';
import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
      <PreName>
  {`__  __          __ __        _ 
\\ \\/ /__  __   / //_/____ _ (_)
 \\  // / / /  / ,<  / __ \`// / 
 / // /_/ /  / /| |/ /_/ // /  
/_/ \\__,_/  /_/ |_|\\__,_//_/`}
</PreName>
        <PreWrapper>
        <PreNameMobile>
  {`__  __      
\\ \\/ /__  __
 \\  // / / /
 / // /_/ / 
/_/ \\__,_/  

    __ __        _ 
   / //_/____ _ (_)
  / ,<  / __ \`// / 
 / /| |/ /_/ // /  
/_/ |_|\__,_//_/`}
</PreNameMobile>


        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          This website was not entirely made by me(Improvised code). Credits to Sat Naing{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub Repo Of the Original Creator
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        </div>
      <div className="illu-section">
        <PreImg>
          {`
                                                                                           
   +++++++++++++****+*****                                                                 
                         **********###                                                     
                                    #########                                              
                                          ######                                           
                                #*###############                                          
             ++++*****************####**#########                                          
   +++++++++                            *########                                          
                                ****##############         *#                              
                           ******#              ###           #%%                          
                      *****                      ###%%%%%%%       %@                       
                   ***                           ###%%%%%%%%%%%%     @%                    
               ++*                            %####%%#     %%%%%%%%%@  %@                  
           +++                               #####               %%%%@%@@@@                
                                            #####                    %@@@@@@               
                                           ####                         @@@@@@             
                                           ####                          @@@@@             
                                          #####                             @@@@%          
                                          #####                               @@@          
                                           ####                                            
                                            ####                                           
                                             #####                                         
                                              #######%                                     
                                                 ###%%%%%%%%%%%#                           
                                                     %%%%%%%%%%%%%%%@@@@@                  
                                                                 %%%%@@%@@@@@@             
                                                                     @@@@@  @@@@@          
                                                                       %@@@@    @@@        
                                                                          @@@     @@@      
                                                                           @@@@     @@     
                                                                             @@@      @    
                                                                              @@@     @@   
                                                                                @@      %  
                                                                                @@@        
                                                                                  @        
                                                                                  @@       
                                                                                   @@      
                                                                                   @@      
                                                                                    #      
                                                                                                                                
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
