import  omelette  from '../../assets/image-omelette.jpeg'
import './_recipePage.scss'


function RecipePage() {
    return(
        <>
            <div className='layout'>
                <section className='section--container'>
                    <figure className='section--container__figure'>
                        <img className='section--container__figure__img--banner' src={omelette} alt="" />
                    </figure>
                    <article className='section--container__article--content'>
                        <div className='section--container__article--content__div--title'>
                            <h1 className='section--container__article--content__div--title__h1'></h1>
                            <p className='section--container__article--content__div--title__p'></p>
                        </div>
                        <div className='section--container__article--content__div--title__div--time'>
                            <p className='section--container__article--content__div--title__div--time__p'><span></span></p>
                            <ul className='section--container__article--content__div--title__div--time__ul'>
                                <li className='section--container__article--content__div--title__div--time__ul__li'><span className='section--container__article--content__div--title__div--time__ul__li__span'></span></li>
                                <li className='section--container__article--content__div--title__div--time__ul__li'><span className='section--container__article--content__div--title__div--time__ul__li__span'></span></li>
                                <li className='section--container__article--content__div--title__div--time__ul__li'><span className='section--container__article--content__div--title__div--time__ul__li__span'></span></li>
                            </ul>
                        </div>
                        <div className='section--container__article--content__div--title__div--ingredients'>
                            <h2 className='section--container__article--content__div--title__div--ingredients__h2'></h2>
                            <ul className='section--container__article--content__div--title__div--ingredients__ul'>
                                <li className='section--container__article--content__div--title__div--ingredients__ul__li'></li>
                                <li className='section--container__article--content__div--title__div--ingredients__ul__li'></li>
                                <li className='section--container__article--content__div--title__div--ingredients__ul__li'></li>
                                <li className='section--container__article--content__div--title__div--ingredients__ul__li'></li>
                                <li className='section--container__article--content__div--title__div--ingredients__ul__li'></li>
                            </ul>
                        </div>
                        <div className='section--container__article--content__div--title__div--instructions'>
                            <h2 className='section--container__article--content__div--title__div--instructions__h2'></h2>
                            <ul className='section--container__article--content__div--title__div--instructions__ul'>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                                <li className='section--container__article--content__div--title__div--instructions__ul__li'>
                                    <span className='section--container__article--content__div--title__div--instructions__ul__li__span'></span>
                                    <p className='section--container__article--content__div--title__div--instructions__ul__li__p'></p>
                                </li>
                               
                            </ul>
                        </div>
                        <div className='section--container__article--content__div--title__div--nutrition'>
                            <h2 className='section--container__article--content__div--title__div--nutrition__h2'></h2>
                            <p className='section--container__article--content__div--title__div--nutrition__p'></p>
                            <table className='section--container__article--content__div--title__div--nutrition__table'>
                                <tr className='section--container__article--content__div--title__div--nutrition__table__tr'>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                </tr>
                                <tr className='section--container__article--content__div--title__div--nutrition__table__tr'>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                </tr>
                                <tr className='section--container__article--content__div--title__div--nutrition__table__tr'>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                </tr>
                                <tr className='section--container__article--content__div--title__div--nutrition__table__tr'>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                    <td className='section--container__article--content__div--title__div--nutrition__table__tr__td'></td>
                                </tr>
                            </table>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

export default RecipePage