import React, { useState } from 'react';
import '../Assets/Content.css';
import Cards from './Cards';
import Carousel from 'carousel-react-rcdev'

const Content = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };


  return (
    <div className='content'>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='content_header'>
            <h1 >Recently Added</h1>
            {isHovering && <span className='content_explore'>Explore</span>}
        </div>
        <div className='cards_content'>
            <Carousel>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa420bjqCvjRuGnsxRBPB38nhBreaOmTpgfPvEZ_1dz-VaD-mU-Orr1-kvQs5-EB7h0GovQy67M5KCDMcGcZvVHJ9GAdDX61LcUFaM-K-6wDHdPUte5So8YOe0X9JYIQ5R5ElnI_dwQWiUpWy9kPzovJQ8JdrYGdJ9Y.webp?r=0a6"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdNxY8FX-ZwSkXh9As7k8pwEdE40_IbR1j1o8hz5gCv0oj1nDaK-RgZvmcMGVNvfaD5TP4ktTSSxd31rXSmKV0sJgb_H0Xa5klZDORWWNPFdq0ah62i6h9qrmXy9XWn9wNGqTImz-bKzCDKS2LkRRX-pgOaNtoLqkZQWcIGfEMIZxHMEJHLm-yqUVUKsC4.jpg?r=efb"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcwcfnv4voCjRrIi1ta-U3VrTY4vYp9Kf6bZFJ_qmE5Z8ZoJ14MYPCRg4tzTAIGFjtiooUbDwaz6ojA3PZcnQooDDkX7xUAeXyN6MAluTR3MPaIjtebd2QGwPTCnWTzEKTKY1pbWOSUMj0t4HlcwZzSrw4W8Ig0p7_y9ue8Xdy-GYJlvQjyETPr7Lz2zjUw.jpg?r=4c8"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQUv6YVNfge4FW8K5_jMzASvupyta5AUBY2j6vCeMJcXJ0vIxiuoHgKx6z3OqqWeym5p29Ys8j9G7FSsI5rQNfmlgVZHnB1A08.webp?r=612"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6hqHn8-qqFnbkFTS2DXy2k-Fc7kri9SM7FDgz0PhZ5lbudnTyGNZ-4-51C7e-DTeorTeWOJ1-5HAz3kE8EqOJrvV-49NuFy7A.webp?r=327"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWTLRS-n5KPhvZhJ3XOS1BTGWqv5TWM6SixNKyK6EsRL8o8BI3KYVuZmCFctVd58G54IqN_eGte4haUs_KbHwj-Ky9C63Jqwposf9kkrTbwNBYTqp5BYCj3Pk4z1l7lCGUuFkIbdqwnf7HMt7ebSkhQ6QqfDXPTunt367bCcINXIFhPu6Zrj6172goqbYnnSL8uW.webp?r=36a"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfolJSTZE5u0MGD1CVxW7TUhmgIKbbNKb-NsODsgvnG8xXhRTSYRATRkgx_J4glHK-GoGsb8GnthFgO49VjVNhRSFSOE_EBItNk.webp?r=ec9"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYuf_gFezPHHs6Z88z4QZWfhii4VtnlqtoOniZFEMDORHjhsCb4kYImP1lILFIQuyFLWak9q57SRon-0mVWE_3rpAIl6TlU5idc.webp?r=1cf"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTqTHioiYR2we7Q0O_FrXEoY-eN_mqTitmWmzXRhE8kfVeKaYMJY8MzXKWHcNDRbpUp5GRCTdsCHOlDxD4S-VT7fkC21ifOr6f3z_Ay4Y0AOJp_qFSPwT970kUqvUYvMsmBnHJ1RUk3GcnJgjSxY2tHB5-lvl6bUW5UYKXi5T58XQfX0buGQDHAKY7fnPCs.jpg?r=f1f"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU4D2F2SaAt1tE7IA_TjEeYWN8Ex7Zt6yRBlyyCqUBAz1B0nC0cMInQBsVRA3GMB4xbXys8v3Z10bM7EpJP2RyFIueKA7qbk0-iiWDw6l8DWoZZL-b57bUkxrdYQ8KF72t-d.jpg?r=ffd"/>
            </Carousel>
        </div>
        <div className='content_header'>
            <h1 >Trending Now</h1>
        </div>
        <div className='cards_content'>
            <Carousel>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeaNFmCCLg7sIREA7ZmrGXcegdSjQ-7c_4GcO--cBHJx_QYm8lHGaZ9pos7kgYtpwnp3k6gTynRhLiJDXqJmXYCE5rrj3-jA3-vep8sPGO3GECiNmaYJmuiUAKK0MiTjwr1ZdgYnL-NI7-h6rKcaYVRgjunQZ_EECou-ajjDIjCTif0yTQE7cdhl37b-n4Pv7bgp.webp?r=615"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXaECTaBGwWI88yWzuDVlyKbPSStNdfMs3mrlumy2XSZaTmbCLKN_9ubsscSlfaB64OAB0RJ9-xZxs-vu9klLyCz1S9_LFkmDqvN7a2abNsdlu2eEjuENZXN2naQE4P1jJ932jnf58krRMoJoh5YNL6EjhJH86DDC8FdNXn2F0eAo47xNqbwlqwU-9E17x01Th1vbIl2WHObfeyVanRlr_ORVkEEcPJT.jpg?r=59f"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarewCd9OBUnSRPRMTTjqguU7rYx7e5tcJWDT-s0Lb9sVoN8q2D7AtgoP-r-qQYNZPTe_DoBtwdTtBrM6oZwTbS-BMlrP2XueCEBFx5mYCuO_fKTzpKSylP5JdM7-9cCIBlgcZZQnlE9eD5-2Y9NQ6VWQGEGIcKlSsis_n5mL5-xJAmhxwzR-NYq6ui26MM1GAofXu7IeUe80TuYnWP_dHPXnJTi0vgD.jpg?r=578"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ7keI5i55ypcWAzMAY-DpRFOR9V798v55wMon71cN40Be0NyCaveO743VOJ_szK2Sg21VAdq8Maw49m0ZnxoUidYzJeIDiAta1O_0QbwNqybWVPppK1_uFvfTDQMQdvBTYa.jpg?r=5da"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBJUa3L0oCdqYFCwmgQkDf_1mnjOzpc0rnipmEzJk2KQGlygNlvI-0ypvICslYgxG4GJzuJd3cUbhpT0L58JJnh9ikOzAg4J6qsoxvDSuXARsGD90fWUfzen8lxD28Buwqd.jpg?r=7c1"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlg_ldNf8T6uhzzM2w3DMCCf_PFHXyRlDq_nh4S6jDVnfB7L58J-d3tSXgVnscTwk9cOPAGSMaUZ5VKQ1p2ztzeL_7929Ujj5R5xXsJnm9NVpzu8DB0E0qvyPzUrOcQfnQV.jpg?r=9c7"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcEI0Fx0ILO_XZLw8tyAgocVWawvYBChxItd03mecdXLkBS8qnWyuZXvhyumwg3cr7CEg0BRiTkqTJd1KQ4NoI_1UWcmghW-kJs.webp?r=9e9"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmyAgv9RbE89uyL7hvlo8RV5nTJ6BO_RJglBNHyEUI0raSDOpPBCSRI7Ll2enwT_eWycVPtB2GPUUGoZTz2o8n4CUBdGMVmwP4.webp?r=230"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY3fgzCzpHAl6vOw7mifUYzw-h2o_eKBHPO8s9RxqDUlxjEiA01EozYwVkqng_MoERy6qouCoGD5--o5D-DESr5-Bx2wzkV29v2MwzPTGksqS4rDsDA_Xa-VWQqyG7CzA0N57woNEo2zY1v4Ag6UITQ-Ww6sQKU-PhuR7Q.jpg?r=4ee"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRa7KPFiG6WcWKrD-gPzDF5Yk3e189hxD9YcgYnqqyVMFyQfVuVDc7sYeiXE9vcR-SXTO48IUYf0zeScH9wig1FGzshvW1_X_6T0YvDDlN5nck4Xv5_fV6h3BqWAaQfMSrTl.jpg?r=7ad"/>
            </Carousel>
        </div>
        <div className='content_header'>
            <h1 >Comedies</h1>
        </div>
        <div className='cards_content'>
            <Carousel>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABee0Lih8tmWmGIfCEiOLR-UU-h7POl7gZiHD6JAWXFq5HznfZzgpgCvchUijENDJWKGxxtnP-yoHMMC6rRDOLHnNcbLFXZAfG7H2a4CT1IVIOI9I6sccwkfokFF12RReokki.jpg?r=322"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4eAoKwNL2SRP0TU4aqXvZUVm3VQuuMuwGXrCcbfPPVkutQ8mP1Fv7uyP07ygrIKGwMI2-plAYLlrQ39adc4AxeLmjN44JSE-Q.webp?r=549"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVYoc6bQBcIY8z6mQdm0IFORbRG5anGO5M_5aVNMxTbLH9fLMEgt97wwYMYxWGa-MUYVFFP3qsHEnfnyyLyIHVUhxIXSwHuATLcHkltY58c08DZGJPS43-VO1UTF-1qc3zuK.jpg?r=935"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb0RC6r2YaNW-aO-bS-IxYKenfvlz1CdZ8jlTBwSfhsd_3bjSsLF5ajjOt82WPtyUF1HjfhA9mrEQpbtTzznx_IxPRCRHchTeHCrccSs8nX90tcUWp8MMXEQiJghqQ7ESC9U.jpg?r=766"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfdeSrbXNYqCR2vGGpVSqgL0a4Yva3TNabF_XU0Z3ExbtKBEmBfHM4Tf-ke8lQzeVEfRtwzCDEQ0y54igZth3WDWDXJeda9fEyHuJyPX4Jf5HaLdEq9pzNpCnkPd_5LWB3mM.jpg?r=48e"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXTUMyd-3ew6SE_Yx4p0fWUvnlwZ4WvDACClwSodiGpCcYK1eII3DBYN1e8xDaTKuFQEjb37VzyX9WkOG5GkYjndwHCC-K_yxSPcWZr2LwpsthSBnXxbXjmc_1z6MYhGfnMp.jpg?r=d07"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSPUbvnOPO5V8bcjmj4D-0ZQIcsX4AFxE1-j-aiNpZEgwx_vgf57a0zc_1LDNFEwlOjSPpdVLw_R0Cw3Drledoh-OkmLdfYONAWx5n_QFB0kXmxpAIvUvZkxaLPevtLmvRW7.jpg?r=43f"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUucrbaJnVPaxOnKXYY8FJUXB3toSE3PfoF8PfWfDs5hPZMW7kZPKseTGUwp4jAbGdbqYKJt5aWL0hnI-zXEQ5HNvztKbKulG2am58HKAqu5Ay42RwdPaw01_ayKwuTr0_dI.jpg?r=b65"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY4SAS35lL8wAwWdC9dKMaiNVO2bSOJEEdAwsmv-7Gp6Chq7U0NIihPcatDga8rmlIsfSC8cr5zRzvvfYwJN1XZCNYvjkF5pV4Rz2M-MpoaiBLJ5Jl3Z1prEoLfYq05bzH-f.jpg?r=c63"/>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABct3khdxgaiwcPPLREmAA7JEB6HQKaxCtps8xu3OSPJv2gWFDISvfIxxEW5BPHYUH557yJSE6WxgNKQNFx667LBECeiiNjLmDMcqPN4XxWuzTQbpvndzzYTcGoebMrZFXGe7.jpg?r=856"/>
            </Carousel>
        </div>
        <div className='content_header'>
            <h1 >Action Movies</h1>
        </div>
        <div className='cards_content'>
            <Carousel>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRmBw1d8X9P2hK_83PQQ0zaCTWtVK8JlADpU7Hzw-1CLo8DbAqIe-J40kgil9q6Ymbdyh-ZBC4Fs4wK0Zj8xP7oa1o-XixKjJ5I.webp?r=cd1" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABagnidlIfLMr6s1FEgjxxGcqCqeVItZV7w0aoXVGUY2W_A_bRal2F17guHqgwf1ztwhU_MC0IE9HLFtZVYaj4dcyZSce4njzsO8.webp?r=5cb" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfM2pmEWW-kiIYKjZmlYYXhKqTsFqm8ieKWpEFxx_NU6yqYKQVarb6_RCrrxP4NNcSz9-740OCik8Hwrf_MYkAlOy2sLl-EK3nI.webp?r=19d" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfoX0_VJICkBNl4-9GT9x073hH_I9bPgoqGALoapOUWarK9aSM6ku8KQUI_B_Z7LqdcBHaQEC2GajPo8GLT-M1ka894wzZBuqao.webp?r=82d" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABToa3qOKgxdeNEewKCVPbi6_jT75FF_Df09NfNF7dzy08r9ckuIV0DrggqXAP7HJpBADZgP5oyY-TGM7IHBIadQixu-nhdajCeI.webp?r=837" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdHIp3ZljeB5lzAhI41YXprsXqWzz0kOK9JPOoQwH81s7dOWKctmxWmN2QLBzwTii2RpBxK6BI1jZtkRb-0Ktqf9NldpcgirxkBIrcVU3QymDpOUBMkpVk33o7sOMvnkyZDV.jpg?r=390" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU1Ac6HaHNx0mWqhO7qgguQsjc2HxI-jYTG8a8VRrcvBqOjK55-lTlC7LU-qd-fxcTxkMikVWaLYDCUF3MKW-uVcWOSHrniBn4I.webp?r=632" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVZFHFcdsCHYoePmX1Ipe_lW5exUb576ta8VPxRdWv2SxuT-duuI3Y6bAI55R-ypdw6XOOY6HTSgZWSCxRFqpVZ7c7cQA-92LOA.webp?r=585" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaY080uLxRV_tiuYrcLLDlknQ7Z4giX6xHrypWv6U9dP4017BX_Wn9d0-MifzaBlKsenEy9VN4Er6PpV_Bvc7zmM3k_nU4X7aw0.webp?r=2b9" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd3Igg-Os-Q8dUlmBundJSwD2Y7HymnVXkN5jcZ9Qn4hqiHQYl04786vTX02vbqBgOE3VE4FVAR6rWr3bd3ZepVMgGwf-tlPNM4vNm-pId_jsp7cepqP3Q-_GFgNuc6jQlwU.jpg?r=c22" />
            </Carousel>
        </div>
        <div className='content_header'>
            <h1 >Documentaries</h1>
        </div>
        <div className='cards_content'>
            <Carousel>
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT2atShu-Z-1td-26uwJ8buiULsWV6QYx7hRwrZSNL8BCnN1jvERaMa0XTt9kOQ-PACUhA8flE5y2qUgba449LQqUXHNUwQBFqC1tTqbQdxZcEHQeB1sZPBIBpwM9I3kTziy.jpg?r=a91" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcYA8GoH4kGiJfEEVKAgGGn3Fk0DXGBd4QKy2GVkQo_Ojr8jY8HjSK63yPacnptZyFTFQt91v5LogHkaIxkfMjrBmkuJY0IRwiBj-daDghJITwxRLHm4qk9EMPvkmBijWBGd.jpg?r=219" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdO9Qlgwg5TCMeXcryOz8MZGD-m09Rwm7F11N68HjBfjfrJboYXrF4E40MO3hkG7piIhHvZkKXuuBalINFp_XVVgpfXq2_sq42WQ9KvvlU4VzF63m-rpuF7KyA0Dp5262f32.jpg?r=316" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJFCtZxAyrY0H1F834cVSoMHUJUDVmod1NxR44rp1edWGX1F6AoldimzXV_d0HKnz9cu3gAx3SRwEp381vhYwR70YN8bKW28BJ8tZ29Dqr3rG1YzFvmLjR8IUMh5N2OS_RN.jpg?r=ad8" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0GqpL-dcQkY60wJ2XWlzRiP9b2n2-rw-1gzxEPczY-2_V3OmE10QFTAVXXZjXz2GFf2IH18bmCkamAN_p8KT4h8cCMujBWBvI.webp?r=bcb" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkBvLGhb0qcjDHvfFWQTbCRWn1U74dCoCSIwSxdfqt_6bDiLVO1tfdFTfUrAe1rZ6mVwzXT8GBnha9JYeIjdzod4xrMBdFGU7H8Z8DrwgMZlwtVwpvZAyrD_7q804TBEICW.jpg?r=057" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdw5vt2ZsbmGR_GarIJhLfWTO6LkHsKuxyPjSwEk5MvDDzUUS1k9OaegAb7mQzQ_gEuWIDLfiwcSpyoBfvmWA0FxSvpyci3obFFvtGQM_2WhY795lM--VibCkl3QQISnMK5G.jpg?r=e7a" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdciCEc8MJ1n3BMHsr9HKaRfuDj53Jk2XslO6FfqORCzrd_9k-chLi1LnhjXccG1Oi62hIs2XEZ1lkc_e30tGNF5axte_l4gdwwYeV-Y77D-3zPJnagS-ZPZrP07m4SrItMa.jpg?r=3b9" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUHD4VBiNckyPhZeuAczskTEV8x-eeBasX9vVUD9h0nxQD0LqAeY2qxiGvaQe0Kpbdpf1jqZBGOOCxYTGTMaidgFQ6CsQ83_x-c.webp?r=74b" />
                <Cards image="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU-0rOc8-hipY8CZxdriqS-wyozfcSH3vrAOyCI42LibLZkzzf4qI0rwQYEN81kxONo5egzZpT2wR_UGaDiMxWHzKEW2Ki-HchwzL8qJiA_CXFC9aduWwDXikH91aDMHilLt.jpg?r=472" />
            </Carousel>
        </div>
    </div>
  )
}

export default Content