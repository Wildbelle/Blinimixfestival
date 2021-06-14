import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalCgi from './ModalCgi';


import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormGame(props) {
  const { register, handleSubmit } = useForm();
  const {revele, toggle} = ModalCgi();
  const [message, setMessage] = useState("")

  const onSubmit = (data) => {
    if (data.cgi) {
      data.items = props.responses
      delete data.cgi
      
      fetch('/api/participants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(result => {
        if(result.ok) {
          setMessage("Votre participation a bien été enregistré !")
          setTimeout(() => {
            props.history.push('/map')
          }, 2000)
        }
      })
    } else {
      setMessage("Veuillez accepter les conditions générales du concours !")
      setTimeout(() => {
        setMessage("")
      }, 3000)
    }
  }

  const Modal = ({revele, cache}) => revele ? (
      <React.Fragment>

        <div className="wrapper">
          <div className="modal-cgi">
              <div className="header-modal">
                <button className="btn btn-close" onClick={cache}><FontAwesomeIcon icon={faTimes}/></button>
              </div>
              <div className="content-modal">
                  <h6>REGLEMENT DU JEU CONCOURS LE BLINI GAME PAR BLINI</h6>
                  <p>du 15 juin au 10 juillet 2021</p>

                  <p>ARTICLE 1 : SOCIÉTÉ ORGANISATRICE La société Delabli SAS immatriculée au registre du commerce et des sociétés sous le numéro : 30844885100169 dont le siège social est situé Route de Bayonne, 40230 Saint-Geours-de-Maremne (Société Organisatrice) organise un jeu gratuit sans obligation d’achat intitulé : « Le Blini Game par Blini » avec tirage au sort ci-après dénommé le « Jeu ».</p> 
                  <p>Ce Jeu gratuit sans obligation d'achat se déroule du 15/06/2021 à 12h jusqu’au 10/06/2021 à 12h, heure française de Paris. Le Jeu sera relayé par la Société Organisatrice sur ses réseaux sociaux, plateformes, applications ou pages de Instagram, Facebook, Twitter, Apple, Google et/ou Microsoft (liste non exhaustive). Ces sociétés ne sont pas organisatrices, co-organisatrices, ni partenaires de ce Jeu et ne le parrainent pas. Les données personnelles pouvant être collectées lors de l’inscription ou du déroulement de cette opération sont destinées à la Société Organisatrice et non à Facebook, Twitter, Apple, Google ou Microsoft ni à aucune autre société sur les réseaux sociaux, plateformes, applications ou pages desquelles le “Jeu” peut être relayé. Ce Jeu-Concours n’est pas géré ou parrainé par Facebook.</p> 

                  <p>ARTICLE 2 – DATES DE L’OPÉRATION</p>
                  <p>Le Jeu se déroule du 15 juin au 10 juillet 2021 inclus.</p>

                  <p>ARTICLE 3 – PARTICIPANTS</p> 
                  <p>Le jeu est ouvert à toute personne de France métropolitaine à l’exclusion des membres du personnel de la société DELABLI et des membres de leur famille proche (parents, frères et sœurs ou toute autre personne résidant dans le même foyer) âgée de 18 ans minimum. Toute participation à ce Jeu doit obligatoirement respecter les conditions d’utilisation du présent règlement. La participation est strictement nominative et le participant ne peut en aucun cas jouer sous plusieurs pseudonymes, avec plusieurs adresses emails, et ce, quel que soit le nombre d’adresses électroniques dont il dispose ou pour le compte d’autres participants. Toute participation non conforme aux caractéristiques énoncées ci-dessus ne sera pas prise en compte. Les participants autorisent toutes les vérifications concernant leur identité, leur âge, leurs coordonnées postales ou la loyauté et la sincérité de leur participation. Toute fausse déclaration, indication d'identité ou d'adresse fausse entraîne l'élimination immédiate du participant.</p> 

                  <p>ARTICLE 4 – MODALITÉS DE PARTICIPATION</p> 
                  <p>La participation à ce jeu est gratuite et sans obligation d’achat pendant la durée du concours du 15 juin au 10 juillet 2021 inclus. Le Jeu est accessible sur le site : blinimixfestival.fr. Pour participer au Jeu, le participant doit compléter le formulaire d’inscription en complétant les champs obligatoires suivants précisés par une étoile : 
                  ● Civilité ● Prénom ● Nom ● Email ● Date de naissance 
                  Le participant a le choix de s’abonner ou non aux actualités, recettes et bons plans Maison Foody. S’il accepte, il fera partie du programme CRM Maison Foody.</p>  

                  <p>ARTICLE 5 – LOTS ET ATTRIBUTION DES LOTS</p>  
                  <p>Les gagnants qui seront sélectionnés lors du tirage au sort du Jeu-concours remporteront en dotation: 
                  • 10 places pour le Festival POSITIVE URBAN FESTIVAL d'une valeur de 67,5€ chacune qui a lieu le 4 septembre 2021 
                  • 10 « kits apéro du festivalier » d’une valeur de 20€ chacun. 
                  Nos bons dégustation sont valables jusqu’au 31 décembre 2021. La Société Organisatrice se réserve la possibilité de remplacer la dotation annoncée par une dotation équivalente c'est-à-dire de même valeur ou de caractéristiques proches si les circonstances l’y obligent. La dotation ne pourra donner lieu à aucune contestation d’aucune sorte. Le gagnant ne pourra prétendre obtenir la contre-valeur en espèces de la dotation gagnée ou demander son échange contre d’autres biens ou services. Dans l’hypothèse où le gagnant ne voudrait pas ou ne pourrait pas, pour quelque raison que ce soit, bénéficier de tout ou partie de la dotation gagnée, dans les conditions décrites dans le présent règlement, il perd le bénéfice complet de ladite dotation et ne peut prétendre à quelconque indemnisation ou contrepartie. La dotation sera quant à elle non remise en Jeu et la Société Organisatrice pourra en disposer librement. Les gagnants du jeu autorisent toute vérification concernant leur identité. Toute indication d’identité entraînera l’élimination de ceux-ci. De même, la Société Organisatrice se réserve le droit de poursuivre par tout moyen, toute tentative de détournement du présent règlement, notamment en cas d’informations erronées </p> 

                  <p>ARTICLE 6 – DÉSIGNATION DES GAGNANTS ET ATTRIBUTION DES LOTS</p>  
                  <p>Les participants dûment inscrits au Jeu seront tirés au sort une fois l’opération terminée, le 9 mai 2021, les 25 gagnants tirés au sort remporteront les dotations « Aperitivo au Danico d’une valeur de 75€ » ou « Coffret l’art de l’aperitivo d’une valeur de 49€ ». Les gagnants seront avertis par e-mail à la suite du jeu via l’adresse électronique fournie par lui au moment de sa participation au jeu, dans un délai de 15 jours maximum. Il devra confirmer l’adresse d’envoi du lot dans un délai de 30 jours. L’absence de réponse dans les 30 jours après réception de ce message vaudra abandon du lot par le gagnant. Il ne peut y avoir qu’une dotation attribuée par personne pendant toute la durée du jeu (à raison d’un lot par gagnant : même nom, même adresse). Par souci de respect de la confidentialité, la liste des gagnants ne pourra être communiquée à des tiers.</p>  

                  <p>ARTICLE 7 – FORCE MAJEURE</p>  
                  <p>La Société Organisatrice ne pourra être tenue responsable si, pour une raison indépendante de sa volonté et/ou en cas de force majeure, le jeu venait à être écourté, modifié, reporté ou annulé ; et ce sans qu’une quelconque indemnisation ne soit due aux participants. La Société Organisatrice ne pourra être tenue responsable si, pour une raison indépendante de sa volonté, des dysfonctionnements techniques, des bugs informatiques ou tout autre problème technique impacterait le bon déroulement du jeu ou la liste des gagnants. Les plaignants ne pourraient alors prétendre à quelques dotations que ce soit. La Société Organisatrice ne saurait être tenue pour responsable en cas de vol, mauvais acheminement du courrier ou détérioration des dotations par les services postaux.</p>
                  
                  <p>ARTICLE 8 – PUBLICITÉ</p>  
                  <p>Du seul fait de sa participation, chaque gagnant autorise la Société Organisatrice à utiliser ses noms et prénoms dans toute manifestation publi-promotionnelle liée au présent Jeu sans que cette utilisation ne puisse conférer au gagnant un droit à rémunération ou un avantage quelconque autre que la remise du lot gagné. En tout état de cause, l’utilisation de ces données personnelles dans ce type de manifestation liée au Jeu ne pourra excéder 12 mois après la fin du Jeu. Si un gagnant s’oppose à l’utilisation de ses coordonnées, il doit le faire connaître sans délai à la Société Organisatrice en envoyant un courrier à l’adresse suivante : LABEYRIE FINE FOODS – service Communication Concours “Le Blini Game par Blini ” 77 bd Haussmann 75008 Paris</p>

                  <p>ARTICLE 9 – RESPONSABILITÉ </p> 
                  <p>La responsabilité de l’organisateur ne peut être recherchée en cas d’utilisation par les participants de coordonnées de personnes non consentantes. Il est expressément rappelé que l’Internet n’est pas un réseau sécurisé. La Société Organisatrice ne saurait donc être tenue pour responsable de la contamination par d’éventuels virus ou de l’intrusion d’un tiers dans le système du terminal des participants au Jeu et décline toute responsabilité quant aux conséquences de la connexion des participants au réseau via le Site pour des causes qui ne seraient pas directement et exclusivement imputables à la Société Organisatrice. Celle-ci ne pourra être tenue pour responsable en cas de dysfonctionnements du réseau Internet, notamment dus à des actes de malveillances externes, qui empêcheraient le bon déroulement du Jeu. Plus particulièrement, la Société Organisatrice ne saurait être tenue pour responsable d’un quelconque dommage causé aux participants, à leurs équipements informatiques et aux données qui y sont stockées, ainsi que des conséquences pouvant en découler sur leur activité personnelle ou professionnelle, sauf en cas de faute directe et exclusive de la Société Organisatrice. En outre, la responsabilité de la Société Organisatrice ne pourra être retenue en cas de problèmes d'acheminement ou de perte de courrier postal ou électronique. La Société Organisatrice ne saurait davantage être tenue pour responsable au cas où un ou plusieurs participants ne pourraient parvenir à se connecter au site du Jeu ou à y jouer du fait de tout problème ou défaut technique lié notamment à l'encombrement du réseau où dû à des actes de malveillances. Les lots attribués aux gagnants ne peuvent donner lieu à aucune contestation d’aucune sorte et ne pourront en aucun cas être échangés à la demande des gagnants contre leur valeur en espèces ou contre toute autre dotation pour quelque raison que ce soit. La responsabilité de la Société Organisatrice ne pourrait être recherchée en cas d’incidents qui pourraient survenir du fait de l’utilisation ou de l'absence d'utilisation du lot attribué, qui ne peuvent être remplacés par un autre lot ou versé sous forme d'argent, sauf sur décision de la Société Organisatrice. La Société Organisatrice ne saurait être tenue pour responsable des retards et/ou pertes du fait des services postaux ou de leur destruction totale ou partielle pour tout autre cas fortuit. Les participants qui tenteraient de participer par des moyens tels qu’automates de participation, programmes élaborés pour des participations automatisées, utilisation d’informations, e-mail autres que ceux correspondant à leur identité, et plus généralement par tous moyens non conformes au respect de l’égalité des chances entre les participants en cours de Jeux seraient automatiquement éliminés. Toutes informations ou coordonnées incomplètes, erronées ou en violation au règlement, entraîneront la nullité de la participation et le participant concerné ne pourra donc pas être éligible au gain d'une des dotations mises en jeu dans le cadre du Jeu. Toute participation devra être loyale : il est rigoureusement interdit, par quelque procédé que ce soit, de modifier ou de tenter de modifier les dispositifs de Jeu proposés, notamment afin d'en modifier les résultats. La Société Organisatrice se réserve la possibilité d'annuler à tout moment et sans préavis la participation de tout Participant qui n'aurait pas respecté le règlement. Il est rigoureusement interdit pour une même personne physique de jouer à partir d'un compte de joueur ouvert au bénéfice d'une autre personne qu'elle-même.</p>  

                  <p>ARTICLE 10 – ACCEPTATION DU RÈGLEMENT </p> 
                  <p>La participation au tirage au sort implique l’acceptation pleine et entière du présent Règlement.</p> 

                  <p>ARTICLE 11 – RÈGLEMENT </p> 
                  <p>Ce règlement peut être consulté pendant toute la durée du Jeu sur toutes les pages du jeu. Le règlement peut être modifié à tout moment sous la forme d'un avenant par la Société Organisatrice. L’avenant sera publié sur le site du Jeu. Il entrera en vigueur à compter de sa mise en ligne et tout participant sera réputé l'avoir accepté du simple fait de sa participation au Jeu, à compter de la date d'entrée en vigueur de la modification. Tout participant refusant la ou les modifications intervenues devra cesser de participer au Jeu.</p> 

                  <p>ARTICLE 12 – REMBOURSEMENT </p> 
                  <p>Les frais engagés par les participants au Jeu peuvent être remboursés dans les conditions suivantes, et à raison d’un remboursement maximum par Foyer (même nom, même adresse postale) : - Sur simple demande écrite à l’adresse suivante : LABEYRIE FINE FOODS – service Communication Concours “ Le Blini Game par Blini ” 77 bd Haussmann 75008 Paris - En précisant son nom, son prénom, son adresse postale et son adresse électronique avec laquelle il a joué. - En accompagnant sa demande d’un RIB ou un RIP. Le montant du remboursement correspondant aux éventuels frais de connexion à Internet spécifiquement occasionnés pour s’inscrire au Jeu, y participer et pour consulter les résultats depuis le territoire de résidence visé au présent règlement devra être justifié sur présentation de la facture de l'opérateur et en tout état de cause, pour une durée effective qui ne peut dépasser une durée maximale totale de l'ordre de 3 minutes. Le cas échéant, toute demande de remboursement devra être envoyée dans le délai indiqué ci-dessus et comporter dès la demande de remboursement ou dès leur disponibilité, les documents et informations suivantes relatifs au participant : - son nom, son prénom, son adresse postale et son adresse électronique avec laquelle il a joué ; - une photocopie de sa carte d'identité ; - une photocopie ou impression de la facture de l'opérateur téléphonique et/ou du fournisseur d'accès détaillant le coût et la durée de connexion résultant de sa participation au jeu. Cette photocopie fera office de justificatif de domicile. Le timbre de la demande de règlement pourra être remboursé sur demande par virement bancaire sur la base du prix du timbre tarif lent en vigueur. Il sera alors procédé à un seul remboursement de timbre par Foyer (même nom, même adresse postale) pour toute la durée du Jeu. Le timbre de la demande de remboursement pourra être remboursé sur demande par virement bancaire sur la base du prix du timbre tarif lent en vigueur. Il sera alors procédé à un seul remboursement de timbre par Foyer (même nom, même adresse postale) pour toute la durée du Jeu. Aucune demande de remboursement adressée par courrier électronique ne pourra être prise en compte. </p> 

                  <p>ARTICLE 13 – DONNÉES À CARACTÈRE PERSONNEL </p> 
                  <p>Les données collectées font l’objet d’un traitement informatique. Elles sont utilisées par la Société Organisatrice ou ses partenaires pour les besoins du Jeu. En communiquant ses données à caractère personnel, le participant donne l'autorisation expresse à l’organisateur de traiter ces informations pour les finalités indiquées ci–après. Les données seront reprises dans les fichiers de l’organisateur qui les traitera en vue de la gestion du Jeu, de l’attribution des prix, ou encore pour la promotion du Jeu. Les données collectées sont obligatoires et nécessaires à l’élaboration des bulletins de participations, à leur tirage au sort et à la transmission du résultat du vote au gagnant. En cas de refus de fournir ces données, les personnes concernées ne pourront être contactés pour être désignées comme gagnants. Les données traitées seront conservées pendant toute la durée du Jeu et quelques mois après pour la promotion éventuelle du Jeu soit 18 mois maximum. Conformément à la règlementation applicable en matière de données à caractère personnel, loi n°78-17 relative à l’Informatique, aux fichiers et aux libertés du 6 janvier 1978 modifiée et Règlement Général sur la Protection des Données Péronnelles (RGPD) n°(UE) 2016/679 du 27 avril 2016 : Les participants disposent d’un droit d’accès, de rectification, d’opposition, de limitation de traitement, d’effacement et de portabilité de ses données qu’il peut exercer par courrier en précisant son nom, prénom, adresse, et en joignant une copie recto-verso de sa pièce d’identité, à l’adresse suivante : LABEYRIE FINE FOODS – service Communication Concours “ l’art de l’aperitivo par l’atelier Blini ” 77 bd Haussmann 75008 Paris L’action demandée sur ses données sera effective au plus tard 45 jours après la réception de sa demande. En cas de litige non résolu avec la Société Organisatrice concernant la gestion de vos données personnelles, vous pouvez adresser une réclamation auprès de la CNIL à l’adresse https://www.cnil.fr/fr/plaintes. </p> 

                  <p>ARTICLE 14 – LOI APPLICABLE </p> 
                  <p>Toute difficulté relative à l’interprétation ou l’application du présent règlement sera tranchée par la Société Organisatrice dont les décisions sont sans appel. Les contestations et réclamations écrites ne seront plus prises en compte par la Société Organisatrice passé un délai d’un mois après la clôture du Jeu</p>
              </div>
          </div>
        </div>
      </React.Fragment>

      ) : null;

    return (
      <React.Fragment>
        {message !== ""
          ? <div className="message-form"> {message} </div>
          : <div className="card-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <select name="civility" id="civility-select" ref={register} name="civility">
                  <option value="">Civilité</option>
                  <option value="M.">Monsieur</option>
                  <option value="Mme.">Madame</option>
                </select>
                <input type="text" placeholder="Nom" ref={register} name="lastname" />
                <input type="text" placeholder="Prénom" ref={register} name="firstname" />
                <input type="text" placeholder="Date de naissance" ref={register} name="dateOfBirth" />
                <input type="text" placeholder="Adresse mail" ref={register} name="email" />
                <div className="box-newsletter">
                  <input className="input-newsletter" type="checkbox" name="newsletter" ref={register} />
                    <p>J'accepte de recevoir la newsletter Blini</p>
                </div>
                <div className="box-cgi">
                  <input className="input-cgi" type="checkbox" name="cgi" ref={register} />
                    <p>
                      J'accepte les <button className="btn btn-cgi" onClick={toggle}>conditions générales du concours</button>
                    </p>
                </div>

                <button type="submit" className="btn btn-action">Je participe</button>
              </form>
            </div>
        }
        <Modal
          revele={revele}
          cache={toggle}
        />
        
      </React.Fragment>
    )
}

export default FormGame;