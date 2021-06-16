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
          }, 1500)
        }
      })
    } else {
      setMessage("Veuillez accepter les conditions générales du concours !")
      setTimeout(() => {
        setMessage("")
      }, 1500)
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

                  <p>ARTICLE 1 : SOCIÉTÉ ORGANISATRICE</p> 
                  <p>La société Delabli SAS immatriculée au registre du commerce et des sociétés sous le numéro : 30844885100169 dont le siège social est situé Route de Bayonne, 40230 Saint-Geours-de-Maremne (Société Organisatrice) organise un jeu gratuit sans obligation d’achat intitulé : « Le Blini Game par Blini » avec tirage au sort ci-après dénommé le « Jeu ».</p> 
                  <p>La société DELABLI SAS, société par action simplifiée au capital social de 35 142 942,37€, dont le siège social est situé à 77 boulevard Haussmann, 75008 Paris, immatriculée au Registre du commerce et des sociétés de Paris sous le n° 308 448 851, ci-après désignée la « Société Organisatrice » ou « DELABLI » organise un jeu gratuit sans obligation d’achat intitulé : « Le Blini Game par Blini » avec tirage au sort (ci-après désigné indifféremment le « Jeu » ou « l’Opération »).</p> 
                  <p>Ce Jeu gratuit sans obligation d'achat se déroule du 15/06/2021 à 00h jusqu’au 10/07/2021 à 23h59 (heure de connexion faisant foi), heure française de Paris et accessible à l’URL suivante : blinimixfestival.fr. Le Jeu sera relayé par la Société Organisatrice sur ses réseaux sociaux, plateformes, applications ou pages Instagram, Facebook, Twitter, Apple, Google et/ou Microsoft (liste non exhaustive). Ces sociétés ne sont pas organisatrices, co-organisatrices, ni partenaires de ce Jeu et ne le parrainent pas. Les données personnelles pouvant être collectées lors de l’inscription ou du déroulement de cette opération sont destinées à la Société Organisatrice et non à Facebook, Twitter, Apple, Google ou Microsoft ni à aucune autre société sur les réseaux sociaux, plateformes, applications ou pages desquelles le “Jeu” peut être relayé. Ce Jeu-Concours n’est pas géré ou parrainé par Facebook. </p> 

                  <p>ARTICLE 2 – DATES DE L’OPÉRATION</p>
                  <p>Le Jeu se déroule du 15 juin au 10 juillet 2021 inclus.</p>

                  <p>ARTICLE 3 – PARTICIPANTS</p> 
                  <p>Le jeu est ouvert à toute personne de France métropolitaine à l’exclusion des membres du personnel de la société DELABLI et des membres de leur famille proche (parents, frères et sœurs ou toute autre personne résidant dans le même foyer) âgée de 18 ans minimum. Toute participation à ce Jeu doit obligatoirement respecter les conditions d’utilisation du présent règlement. La participation est strictement nominative et le participant ne peut en aucun cas jouer sous plusieurs pseudonymes, avec plusieurs adresses emails, et ce, quel que soit le nombre d’adresses électroniques dont il dispose ou pour le compte d’autres participants. Toute participation non conforme aux caractéristiques énoncées ci-dessus ne sera pas prise en compte. Les participants autorisent toutes les vérifications concernant leur identité, leur âge, leurs coordonnées postales ou la loyauté et la sincérité de leur participation. Toute fausse déclaration, indication d'identité ou d'adresse fausse entraîne l'élimination immédiate du participant.</p> 

                  <p>ARTICLE 4 – MODALITÉS DE PARTICIPATION</p> 
                  <p>La participation à ce jeu est gratuite et sans obligation d’achat pendant la durée du concours du 15 juin au 10 juillet 2021 inclus. Le Jeu est accessible sur le site : blinimixfestival.fr. Pour participer au Jeu, le participant doit compléter le formulaire d’inscription en complétant les champs obligatoires suivants précisés par une étoile : 
                  ● Civilité ● Prénom ● Nom ● Email ● Date de naissance 
                  Le participant a le choix de s’abonner ou non aux actualités, recettes et bons plans Maison Foody. S’il accepte, il fera partie du programme CRM Maison Foody.</p>  

                  <p>ARTICLE 5 – DOTATIONS</p>  
                  <p>Les gagnants qui seront sélectionnés lors du tirage au sort du jeu-concours remporteront en dotation :</p> 
<p>10 places pour le Festival POSITIVE URBAN FESTIVAL d'une valeur de 47,5€ chacune qui a lieu le 4 septembre 2021 
10 « kits apéro du festivalier » d’une valeur de 15€ chacun. 
La valeur des dotations est déterminée au moment de la rédaction des conditions particulières du règlement et ne saurait faire l'objet d'une contestation quant à son évaluation. 
La Société Organisatrice se réserve la possibilité de remplacer la dotation annoncée par une dotation équivalente c'est-à-dire de même valeur ou de caractéristiques proches si les circonstances l’y obligent. La dotation ne pourra donner lieu à aucune contestation d’aucune sorte. Le gagnant ne pourra prétendre obtenir la contre-valeur en espèces de la dotation gagnée ou demander son échange contre d’autres biens ou services. Dans l’hypothèse où le gagnant ne voudrait pas ou ne pourrait pas, pour quelque raison que ce soit, bénéficier de tout ou partie de la dotation gagnée, dans les conditions décrites dans le présent règlement, il perd le bénéfice complet de ladite dotation et ne peut prétendre à quelconque indemnisation ou contrepartie. La dotation sera quant à elle non remise en Jeu et la Société Organisatrice pourra en disposer librement. Les gagnants du jeu autorisent toute vérification concernant leur identité. Toute indication d’identité entraînera l’élimination de ceux-ci. De même, la Société Organisatrice se réserve le droit de poursuivre par tout moyen, toute tentative de détournement du présent règlement, notamment en cas d’informations erronées </p> 

                  <p>ARTICLE 6 – DÉSIGNATION DES GAGNANTS ET ATTRIBUTION DES LOTS</p>  
                  <p>Les participants dûment inscrits au Jeu seront tirés au sort une fois l’opération terminée, le 11 juillet 2021. Les 20 gagnants tirés au sort remporteront les dotations « Une place pour le festival POSITIVE URBAN FESTIVAL d’une valeur de XX€ » ou « Un kit apéro du festivalier d’une valeur de XX€ ».
La Société Organisatrice contactera les gagnants d’après les coordonnées remplies par ceux-ci sur le bulletin de participation afin de leur remettre leur lot, dans un délai de quinze (15) jours maximum.
Les gagnants du lot « Une place pour le festival POSITIVE URBAN FESTIVAL d’une valeur de 47,5€ » recevront leur lot à l’adresse mail qu’ils ont indiqué au moment de leur participation. 
Les gagnants du lot « Un kit apéro du festivalier d’une valeur de 15€ » devront confirmer l’adresse d’envoi du lot dans un délai de trente (30) jours. L’absence de réponse dans les trente (30) jours après réception de ce message vaudra abandon du lot par le gagnant. Il ne peut y avoir qu’une dotation attribuée par personne pendant toute la durée du jeu (à raison d’un lot par gagnant : même nom, même adresse). Par souci de respect de la confidentialité, la liste des gagnants ne pourra être communiquée à des tiers.
Les 20 gagnants recevront leur dotation dans un délai de 4 à 6 semaines à compter de la date de fin de la période du Jeu, soit à compter du 9 août 2021. </p>  

                  <p>ARTICLE 7 – FORCE MAJEURE</p>  
                  <p>La Société Organisatrice ne saurait encourir une quelconque responsabilité si, en cas de force majeure ou d’évènements indépendants de sa volonté ou si les circonstances l’exigent, elle était amenée à annuler le présent Jeu, à l’écourter, le proroger, le reporter, le suspendre ou à en modifier les conditions, sa responsabilité ne pouvant être engagée de ce fait.  
Elle se réserve, dans tous les cas, la possibilité de prolonger la période de participation.</p>
                  
                  <p>ARTICLE 8 – PUBLICITÉ</p>  
                  <p>Du seul fait de sa participation, chaque gagnant autorise la Société Organisatrice à utiliser ses noms et prénoms dans toute manifestation publi-promotionnelle liée au présent Jeu sans que cette utilisation ne puisse conférer au gagnant un droit à rémunération ou un avantage quelconque autre que la remise du lot gagné. 
En tout état de cause, l’utilisation de ces données personnelles dans ce type de manifestation liée au Jeu ne pourra excéder 12 mois après la fin du Jeu. 
Si un gagnant s’oppose à l’utilisation de ses coordonnées, il doit le faire connaître sans délai à la Société Organisatrice en envoyant un courrier à l’adresse suivante :</p>
<p>
“Le Blini Game par Blini”
LABEYRIE FINE FOODS – service Communication Concours
77 bd Haussmann 75008 Paris
</p>

                  <p>ARTICLE 9 – RESPONSABILITÉ </p> 
                  <p>9.1 – La responsabilité de la Société Organisatrice ne peut être recherchée en cas d’utilisation par les participants de coordonnées de personnes non consentantes. Il est expressément rappelé que l’Internet n’est pas un réseau sécurisé. La Société Organisatrice ne saurait donc être tenue pour responsable de la contamination par d’éventuels virus ou de l’intrusion d’un tiers dans le système du terminal des participants au Jeu et décline toute responsabilité quant aux conséquences de la connexion des participants au réseau via le Site pour des causes qui ne seraient pas directement et exclusivement imputables à la Société Organisatrice. Celle-ci ne pourra être tenue pour responsable en cas de dysfonctionnements du réseau Internet, notamment dus à des actes de malveillances externes, qui empêcheraient le bon déroulement du Jeu. Plus particulièrement, la Société Organisatrice ne saurait être tenue pour responsable d’un quelconque dommage causé aux participants, à leurs équipements informatiques et aux données qui y sont stockées, ainsi que des conséquences pouvant en découler sur leur activité personnelle ou professionnelle, sauf en cas de faute directe et exclusive de la Société Organisatrice.
</p><p>9.2 – Après le tirage au sort, les gagnants seront contactés par la Société Organisatrice ou par le(s) prestataire(s) de services et sous-traitant(s) auxquels la Société Organisatrice fait éventuellement appel pour les besoins de l’organisation et/ou gestion du Jeu, d’après les coordonnées remplies par ceux-ci sur le bulletin de participation afin de leur remettre leur lot.</p>
<p>Si les coordonnées d’un gagnant sont inexploitables ou si le gagnant ne peut être identifié ni par son nom, ni son adresse postale, ni son adresse électronique, il n’appartient pas à la Société Organisatrice de faire des recherches complémentaires afin de retrouver le gagnant indisponible, qui ne recevra ni sa dotation ni aucun dédommagement ou indemnité
</p><p>9.3 – Les gagnants seront informés par la Société Organisatrice ou par le(s) prestataire(s) de services et sous-traitant(s) auxquels la Société Organisatrice fait éventuellement appel pour les besoins de l’organisation et/ou gestion du Jeu qu’ils ont gagné. Ils recevront leur dotation dans un délai de dotation dans un délai de 4 à 6 semaines à compter de la date de fin de la période du Jeu, soit à compter du 9 août 2021. Dans le cas où la Société Organisatrice, ses prestataires ou sous-traitant ne parviendraient pas à joindre le(s) gagnant(s) (conformément aux coordonnées indiquées dans le bulletin de participation), ou si le gagnant n’a pas retiré sa dotation pendant les délais impartis à la Poste, il sera considéré comme ayant renoncé purement et simplement à sa dotation. La dotation ne sera pas attribuée et ne pourra en aucun cas être réclamée ultérieurement. Elle restera de la propriété de la Société Organisatrice et pourra être réattribuée à un suppléant ou utilisée dans le cadre d’une opération ultérieure.
</p><p>9.4 – La Société Organisatrice ne saurait être tenue pour responsable en cas de retard d’acheminement ou de perte de bulletin et/ou des dotations. La Société Organisatrice ne pourra être tenue pour responsable des perturbations pouvant survenir dans les services postaux (retards, grèves…), ainsi qu’en cas de force majeure.</p>
<p>9.5 – En cas de renonciation expresse du gagnant à bénéficier de sa dotation, celle-ci sera conservée par la Société Organisatrice et pourra être utilisée dans le cadre d’une opération ultérieure, si la nature de la dotation le permet, et sans que la responsabilité de la Société Organisatrice ne puisse être engagée de ce fait.</p>
<p>9.5 – La Société Organisatrice ne saurait être tenue pour responsable des retards et/ou des pertes en cours d’acheminement du fait des services postaux ou des transporteurs, ni de destruction totale ou partielle des prix par ce type de transport ou en cas de dysfonctionnement de ces services, ou pour tout autre cas. La Société Organisatrice décline toute responsabilité quant à l'état du lot à la livraison ou de son défaut de fabrication, le gagnant faisant son affaire de tout recours éventuel contre le transporteur ou le fabricant. </p>
<p>9.6 – La société organisatrice se dégage de toute responsabilité relative à une éventuelle insatisfaction du gagnant concernant son lot.</p>  

                  <p>ARTICLE 10 – ACCEPTATION DU RÈGLEMENT </p> 
                  <p>La participation au tirage au sort implique l’acceptation pleine et entière du présent Règlement.</p> 

                  <p>ARTICLE 11 – RÈGLEMENT </p> 
                  <p>Ce règlement peut être consulté pendant toute la durée du Jeu sur la page internet du Jeu. 
Le règlement est adressé gratuitement à toute personne qui en fait la demande écrite, en indiquant ses coordonnées complètes (nom, prénom, adresse postale) avant le 10/07/2021 (cachet de la Poste faisant foi) à l’adresse suivante :  
« LE BLINI GAME PAR BLINI »
DELABLI – 77 Boulevard Haussmann
75008 Paris
Le timbre nécessaire à la demande de règlement sera remboursé au tarif lent en vigueur (base 20 g) sur demande écrite conjointe. Une seule demande de remboursement de règlement par participant inscrit au Jeu sera prise en compte.  
La Société Organisatrice se réserve le droit de modifier à tout moment le présent règlement sous la forme d’un avenant. L’avenant sera publié sur le site du Jeu. Il entrera en vigueur à compter de sa mise en ligne et tout participant sera réputé l'avoir accepté du simple fait de sa participation au Jeu, à compter de la date d'entrée en vigueur de la modification. Tout participant refusant la ou les modifications intervenues devra cesser de participer au Jeu. 
Aucune contestation, ni réclamation intervenant plus de 3 mois après la clôture du Jeu ne pourront être admises. Il ne sera répondu à aucune demande (écrite, téléphonique ou orale) concernant l’interprétation ou l’application du règlement, les modalités et mécanismes du Jeu ou la liste des gagnants.  
En cas de divergences accidentelles entre ce règlement complet et les supports de l’Opération, il est expressément prévu que ce sont les termes du présent règlement complet qui primeront.
</p> 

                  <p>ARTICLE 12 – DROITS DE PROPRIETE INTELLECTUELLE</p> 
                  <p>Conformément aux lois régissant les droits de propriété intellectuelle et le droit d’auteur, l’utilisation de tout ou partie des éléments faisant l’objet d’un droit de propriété intellectuelle ou protégé par le droit d’auteur reproduit dans le cadre de ce Jeu est strictement interdite, sauf autorisation expresse et préalable de la Société Organisatrice.</p> 

                  <p>ARTICLE 13 – DONNÉES À CARACTÈRE PERSONNEL </p> 
                  <p>Les données collectées font l’objet d’un traitement informatique. La fourniture des données est obligatoire pour la participation au Jeu. En effet, ces données sont nécessaires à la bonne gestion du jeu, l’attribution et la remise des dotations et respecter nos obligations légales découlant du présent règlement.  
En communicant ses données à caractère personnel, le participant donne l’autorisation expresse à la Société Organisatrice de traiter ces informations pour les finalités indiquées ci-après. Les données seront reprises dans les fichiers de le Société Organisatrice qui les traitera en vue de la gestion du Jeu, de l’attribution des dotations, ou encore pour la promotion du Jeu. En cas de refus de fournir ces données, les personnes concernées ne pourront être contactées pour être désignées comme gagnants. 
Les données sont destinées à la Société Organisatrice et pourront être communiquées au(x) prestataire(s) de services et sous-traitant(s) auxquels la Société Organisatrice ferait éventuellement appel pour les besoins de l’organisation et/ou de la gestion du Jeu, notamment pour assurer l’envoi des lots. Pour cette finalité, la Société Organisatrice est responsable de traitement ainsi que du respect de la confidentialité de ces données. 
LABEYRIE FINE FOODS s’engage à ce que les Données Personnelles renseignées dans les bulletins de participation soient collectées de manière licite, loyale et transparente, conformément à la réglementation en vigueur et notamment au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 applicable à compter du 25 mai 2018 (ci-après « RGPD »). 
On entend par données à caractère personnel toute information personnelle (notamment : nom, prénom, date de naissance, adresse e-mail et postale, numéro de téléphone…). Ces données, quelle qu’en soit la nature, permettent d’identifier directement ou indirectement les internautes et de leur adresser en général des informations par voies électroniques. 
Les Données collectées ne sont pas transmises en dehors de l’Union Européenne. En cas de changement de politique, LABEYRIE FINE FOODS s’assurera que ce transfert s’effectue à destination des pays reconnus comme assurant un niveau adéquat de protection de vos Données ou, à tout le moins, sur la base des garanties appropriées prévues par la loi.  
Les Participants disposent d’un droit d’accès, de rectification, d’opposition, de limitation de traitement, d’effacement et de portabilité de ses données. Les Participants peuvent également émettre des directives sur la conservation, la suppression ou la communication de leurs données à caractère personnel après leur décès. Les Participants peuvent exercer leurs droits en envoyant un mail à l’adresse suivante : « contactLFF@labeyrie-fine-foods.com » ou par courrier en précisant nom, prénom, adresse, et en joignant un copie recto-verso de sa pièce d’identité, à l’adresse suivante :  
<p>LABEYRIE FINE FOODS – service Communication</p>
<p></p>JEU LE BLINI GAME PAR BLINI</p>
<p>77 bd Haussmann 75008 Paris</p>

<p>Chaque Participant dispose également du droit de porter ses réclamations auprès de la CNIL dont les coordonnées sont les suivantes :</p>  
<p>CNIL, 3 Place de Fontenoy – TSA 80715 – 75334 Paris CEDEX 07</p>
<a href="https://www.cnil.fr/fr/plaintes" target="_blank">www.cnil.fr/fr/plaintes</a>
<p>Tél : 01 53 73 22 22 - Fax : 01 53 73 22 00</p>
<p>Conformément à la règlementation en vigueur, les données personnelles des participants sont conservées pendant la durée du Jeu et ensuite archivées pendant trois (3) ans avant d’être supprimées.</p> 

                  <p>ARTICLE 14 – LOI APPLICABLE </p> 
                  <p>Le Jeu est soumis au droit français. Toute difficulté relative à l’interprétation ou l’application du présent règlement fera l’objet d’un règlement à l’amiable. A défaut, il sera soumis aux juridictions compétentes de Paris.</p>
                  
                  <p>ARTICLE 15 –  DISPOSITIONS DIVERSES</p> 
                  <p>A compter du 1er juillet 2021, la société DELABLI SAS fera l’objet d’une fusion simplifiée par la société LABEYRIE FINE FOODS France, société par actions simplifiée à associé unique, au capital social de 10 000€, dont le siège social est situé 39 route de Bayonne, 40230 Saint-Geours de Maremne, immatriculée au Registre du commerce et des sociétés de Dax sous le numéro 882 587 314, qui reprendra les droits et obligations de ce présent règlement.</p>
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
                <div className="selected">
                <select name="civility" id="civility-select" ref={register} name="civility">
                  <option value="">Civilité</option>
                  <option value="M.">Monsieur</option>
                  <option value="Mme.">Madame</option>
                </select>
                </div>
                <input type="text" placeholder="Nom" ref={register} name="lastname" />
                <input type="text" placeholder="Prénom" ref={register} name="firstname" />
                <input type="text" placeholder="Date de naissance" ref={register} name="dateOfBirth" />
                <input type="text" placeholder="Adresse mail" ref={register} name="email" />
                <div className="box-newsletter">
                  <input className="input-newsletter" type="checkbox" name="newsletter" ref={register} />
                    <p className="sm">J’accepte de recevoir par e-mail des recettes, des inspirations et des offres de bons de réduction de la part de Maison Foody (l’atelier Blini, Labeyrie, Blini et Delpierre). Je peux à tout moment me désabonner des e-mails de Maison Foody grâce au lien de désabonnement présent dans toutes les communications. 
                    * champs obligatoires <a href="https://maisonfoody.com/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions légales</a> | <a href="https://maisonfoody.com/" target="_blank" rel="noopener noreferrer">Maison Foody</a></p>
                </div>
                <div className="box-cgi">
                  <input className="input-cgi" type="checkbox" name="cgi" ref={register} />
                    <p className="sm">
                      J'accepte les <button className="btn btn-cgi sm" onClick={toggle}>conditions générales du concours</button>
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