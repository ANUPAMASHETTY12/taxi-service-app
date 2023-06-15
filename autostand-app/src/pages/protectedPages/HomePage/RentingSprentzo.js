
import "./RentingSprentzo.css";


export default function RentingWithSprentzo() {
    return (
        <>
            <div className="Renting-with-Sprentzo-Container">
                <div className="Renting-with-Sprentzo-Heading">
                    <p className="Renting-with-Sprentzo-Title"> Renting With Sprentzo</p>
                </div>

                <div className="Renting-with-Sprentzo-Grids">
                    <div className="Renting-with-Sprentzo-Main-Grid-first">
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,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" 
                            alt="" height={85}/>
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p>Flexiblity and choice</p>
                        </div>
                    </div>
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,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" 
                            alt="" height={85} />
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p>Only top quality products</p>
                        </div>
                    </div>
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,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" 
                            alt="" height={85}/>
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p>pay as you play</p>
                        </div>
                    </div></div>

                    <div className="Renting-with-Sprentzo-Main-Grid-second">
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFkZJREFUeNrsnU9SI8mSh6Pa3n7UJ2hxghInQJygwOztEbvZFdrNDtjNDtjNDtX+mUGfoMQJUJ+A7BOMbjCTDp6vVJSEwiMiI/99n1kaZd2S8l/8wj0iPNydAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoik88gvz813/+66r8c7Txn7799//8czGg+5+Uf0blMS2Pz/rvj3gqj5Uc5XMqaEEIve0NXBr09/KYbPnfi7IRn/f0vqcq6iP9G8O6PJYq/mX5zFa0LITetgZ/X/6ZffCRedlwb3sk7rPyOPGw2DGIhb8rj0esPUJvQ8Mfl39e9jXasrEedNxjEWFflse4gUt4FNGXz3BJi0PoTVq47x4fPeiaZVKBX5TH15qtty8i9GsE/4PfeATZ8B2bjjsmchmKPKsVH7XoWX8vr+27drCD5x88AogYity7+Mm1ugU/La9VXPrz0sKvsehQN0WPRF5Z8a5YS5k3eCmv+wSLDgjdbyx+4z5eOWgrcu0P5T0s3NvqxqCsOxYdLCL/XoPIq3VxOcTFvta/1X9LzUzH7xMsOsDPIp+oyFNMtkmAy58q4pWPZdX5ALmGI3XDx5HXMFGxHw8l4Ibltbzj2nuPjx63aVkokchl2JIsqEWv6Uytc8x1rfV5917sWPR8jLt2wQlELh2WBLA8prwuFaYcc+1AQwN0RkOx7IMUurqCX92PmPOVNsjCQQqRy3Ocpxb4DtEvyj+L8novXNha/iDE/ttAG7AsDUnDmOoh/35W61AXxUBELpNphzlE/k7wskdAwodDzluJfYTQ+yHy0QcNWP7bfY1i9xX6qqMiL1TgV00tXcl5y+O0/Oepjr/NYkfo/WDm0YDrEruPgFdNru9GiHypIm+F66vexHFApznRXAEIveN88fxccrGrgPdtQb3uoMhlH/1x2wJQtNMJEftlH+PjCZjJK/a5CGOXyHOPaxOI/LzNyTK08wkR+03fGvOg1tHVLbsMaMyLxNchFmP6zioWHRT5IuF1yPmrVZAi5fPYk9lnF71JAjI4oetLl+QP46bF3pJnIZ3NQxMi1w0mVWqpXQIs3EYkXYz4A8Qu3sBBX2Lihyj0VliwBu9djs97BFaLpdtIUHHmwgJcojLIBLx7GU5dIfTuNvgTtWSur2LXoKCpinri0m0pnetQY228ntCAlm0sXWAGGUMo8qtVL8/xO0LvttgtL7wTYt+IAU+x8WMfC7WuKw8r/uDq2bt+qxOc1uf0oM9oMMO2QW9q6YvYI+O9Y6nChxcJh0nW85uW97TzefG8LoltOETowxV747vMdBWhLQkZRWh36tYXEc81hKI8Ti0BOzqU8F1GO+j6Pgi2qYaLvbHUzDrHcOPauyNu6fKnmRIhHhotu+8KTOeX2giYcf/eAWUN/BjnzlIiE2yS2VTHvOMWP9JpA+eU52HdmOIbiXjW9TaO0OPEPsoocrHiXUrI2AQTZwuIenR+m18mXd/ZhtDjxF5kEvm9Cwts6QryHG/VwlaHrwjfc+Ebq65u/sLzdzudQZYMM1vEXjYU5zFmX9Y9QRMYumkRV7HDS8k1JJGx/Ifr4YErCjJ/4TtT/s29BfHs43OX2zWTcR+7yvc7rGjtucYSi7xQC/mXe1suWnmcf+x+JGSc1iB+76izwDTT3kugnpNynV5mQ+gfN4CJNrDpOys0r1nkExc/4VaotVokSsg4Vvf1LIHoxRs6DhzCzFKfw/d3y9/7hND7Lfixiq7I5K4/R4hcOqK7Ore86hj40sVNDAbVgzeK3Wv927C8etjVvHKM0f3G7bvGs3W56yEiL9RdXWZ4HnKOZaTgZzIXEiD2uZ7P5xmJB+Kz/u0r3s5OhjLr3i4eAtzitY53D3JH6sn51D2eu7AZ8plaaMs5X+/X8+NHnr/pK/QpQodYa34T0JCqOO+rhj0esZqHLiyxpVnszrD+bfSIegtCb4fIxcW8MH5t4VpUZUSGNzorvahb7GrVfbyXcWKh/4HQIWZcbrVorxNZbcx+omPued1id29LhbkZI3QIZdda/S5anZBxw5U/zyB2QOidsOYyJreEVi66kgQhcO8AYq8Jlteat+Ymdz2yYxlrx3Kkbuhkx1hVxv1P7i3oZBUjds9w4m1i37f09pnmg9C7YM1nhjHfKnDcu3mur85vFnqsx4l+V4T/uskkZE6gRrFPPX6joKXhujeNZTtl0MSbzOZrHPe9Cw9bHev3X0ILWqR24/U6vNJAGc7l83yesOjNWsfKDfV5WWttAI3VOTNa82ur+7wxk59ya2VVhPJMO57CKvYUll3vzbeTfDI8r95WUu280AN3NW1+/1aFlFvwvg21sAbDJNoQ8xHiMkuJ6XNrPH0isVtSaPlen6+309mhQNdd9++hIlcuXL4EhptC9LbmAb/93dW/3vuawjnElY9041+cbfearzCnCL291vzCpdkjfZK5euZXgzVfBIg8pwt6n1nslg7M0kl+8bzuJULPz5eEv5VT6CepG+rGmLyJcWZusfta86Xnsxt7GoxVh7XCrHtmL2TqKca1MTAmZla9j2K3WHPfjneJ0CG152Bx2acubnZ9MyHjImIc2hax3xpdbN+h1FOXG16XZ93vErrci0zXfFRDo4qdTPzFzY1IKHGvs+MLq9gDZ+N/ca8ttdgMy5zrOjP2YNE/bhyPiQR6m7HczjRlo9IJyXHkNY22PNvNhBJdseyvCTuN3/Fd5uy0yIXO54yLqD8m4r7LVWpHZ8WfPa/rm8fnZG/0LMGlfViRNHc9ea1EMw0RubH22szgQZx23aL3JjnkRgJHXxdvnfn6piqYtrE3jXGE2EXoc59nHRH8FCJySzXVxmrsIfRudkSW6p25+X2fGCPELh7K9S7rrqI7cWFln4Py6w+xPjq71/LR5ljqk33zHSKmUiDHAWIf67hd3OSl+3mi8ciFT6iGinxmEPm6D+NzgeU1cM5ziUlFdezCMr46FfXlxpFb5BOjV3XdxnRdCB1+GX87/2qhk0xijyVU5K/x+QZvpOh6TXSE3lwDzc2fBtfTN3CkSbHHiNy62ee8T40PoeejibHeQsXuw8zXqjck9pjCluKuW0KEH7u8gQWhN4gG5eS0Eueaa106mMIgCBcg9ro3fKxCRW6s1VZ1KOd9a38IPa/YFyqMx5pFcfpuSeib53en1qi2DbEvarqf24wid/rs1n1re6yjDwBjgIg08sOQsGANCrK6yR91WPNQFzowbuG66fJWCB1ixS4N2De2e2+03J5zyTq1TO5NA+cyvsWEnBrDWzfH5ad9ff8IHau+i1R55EXsVR75bcJf6hzCkwtMKZ3AkldzAGuEDn0Qu9XS3Vq2fbbg/kLG5IUOVdZ9fvcIfXhit+4O68S4NVDkMUt2CB1aLQhxoZ+dLV590dbCjhE57AcjcoSOC29BxtKtWnraiHibIPKPYR19gOga+8L4NXH3nzOnxv5I5HIdLy5sKW8+JJFj0Ydt1UOtodBUhZvNkkwXgT/Ri/3lCL091masxx/u480URXn8rX+LnDHWKppnF5Z3TkR+l3OiTtfnbyKu97RvMewIPb+wv6h1TOHarnRM/GfdDTNBhZdXwbu3pbh1jQL/6jLvX0foUAlEGt+Jqzd7TJXl5Ftdok9Yzun1Ot1bCunYwBex2rPyOHNxmW4HL3KEHtYAZyrwJiqjiHsvhRYeU1vPGqqwSqf0pN5JsU9oG8OdKr1UiuvofcQbQq9H4Jeu/kqljY2PIyfoLB1AxajGcy2cZwZahA6VpblvicC3Wfh5ypzjsTXnW8K8T2mgEHq9Ag+NuGoCsZLnKSvOqAdz49qdvXZbx3c69PH4NgiY2W3FXzoicud+BLMku15daz503akiKhb8EJFj0X1FfuX89223keRx6ZHr1zm8mTkCR+gWV/3BpavQusmutMvTmm6nltnmiDp3dbnp50MNgEHoYQ14ouPxVCmQ/tS/K59xsw4V5NzV0tIo0XWc1lEptuEVCBH2NQJH6CEijw0WETFJdNhjCmGpq/zFxQfj1BoskjFoSJ7pNx2WFMgWoVsb6tTZqndktS6RBQiziP2d6E9cXD21zWuWZ/qUqvNE6MMV+czZ92Q3Nj6MdJezR4ip8Ecbov+8o0OVZ/m3iruKokPYCL1xkXd1iybhoAgdkXu6k63Y5hgRrdfalFCA0FML5HsfrGFE5B7hoQi91yIPnV1fuBZvjgisLXZMgAlCR+Qdc3UDihbIfvFjmv9w+A2R7+S8K+NZdcUt7vhUOwfAovdC5KH7q6MTCGqGlGpdWc4/3vKxQsf/SdaLjW68uPAHzMIjdEQedl4RWmgGmqV7SxkVc/5nw7l7Wz0UhiP0kBI9wSJPvMOrcIEBOcZKLFh1hN5pkYvA73OIvOYEFY96XWvjNVkm536y6hly4knndZcyKw7s57ceinzs7GVzF4Ein6j1rCtBhfzus57HG52c8/UGzjbu58ql28W3i2l5POi5AIseLHRrtdCgJbQEG2IsmNe+jcFBp+5tUvAl8+s6IK4dix7qsucQ+cylyYPuy+vEosWy6/je10v54ppJm3WCBBF6yFjZ4rKvIkR+38AtmsXu3vZw+wrua0P3BAjdxIWh4by6wh0SeZDY1aqvPH93jBwQehesucUinQbMZMeIvCqrdL1xPLrteeRSW/ZvLX51LOtl4h89uQ9LKiNzRpgIkRd6vsWe37YmlKjE7jNB9+jsqxC5YGNNJnox6142+BdPoYjwDi3WPGJrq1QXnRvOc+PsCSW8ZuON0XI5yZ6HfSPzjdfz7csuv089EHm1lu3rsj8afzvbrrdAz2FvQozATmTbee48P+tVAbW85k8Z28mVC0tVnb0OPEKPa8SmrZnGUNJthEbahQ4TdiaU0PDch8hH7d1Jluf7Px+3vfy9w0xtJCQcOknn3Rb6MBnnuxZ7bWgYVTGHmOWfexWtCe0cQhrUjQQL7SjLFDvpVRhE7vs+VplEPnFpCkbOdBjXSTo9GacvcezZUJcW0SQa04rYndWyy+flewGWXRqi7DWvMqo+6X//I/I+5obPfvH83FPLDIHvvS27qJWuW/Q6rPnUpS0ZnNuyO/cjzfKlHjH382iw5iPDO+miYCZdFUrXhX7k21gtwqzhOpsQewrWxvPPPIc7q47GuBcIvb097NJ3OU3FOK7pWrsm9mrpzjK+9w1aymnNU57rCaE3Mz4fJX45lzU3oK6IPWS33IWhk7zLdSM6N5NC7KvY9GIIPYxxSkHq2Nz3N291qW7RgNjrDhstAkQ+MnSSywbcdtmGG5PLXp59p7PmdnnW3bKxwwff2eJVFfEm66o6Oz4LEHvobPzK1ZccQq4nJIf9pfNfiswee6/3My+f3fWW5zbdYxhWfUi11dmAGc8EE7KsduD5e75hor8EjkQEZMTkqLtyYZFeu7ye68AcdfIOfEOEvd8H4Lpb3dCUHsLWwBGNmMrmxus5RegimrkLnw1eqJt+HCjyKrDIl2skh+vepHfg6wYvPxBeVjd+wyV9Ld6g9yDW9cj9XK743y6oju+f9N/LBC6pZR9A0eXJLITeD3wb6997hJdd7BvnXqmAsxRQ1OGKZZ5gTjPDde8NTbjxDXhA1jmJR9I7I3TE/rPYb3omcmt0HSD02oS59Pzo5wxivxAx6URXmwQ+0pUOq9dxTiUYhN6WsXdlefYxtQgwQuwiJmvG1zpFPnVve/Onxq/e4rIj9Fh8hGkRytKz4zBte4wQ+0TFftGgwEe6Xi+WfGz8+qMllRYg9F385dlYfRuob0z8pdWtjhD7a656CebJnfRAJwbFil8GfH3FuByhp8J3XO1r1X1dTOk4zBNmEWLftO7fDRlcggWuyTbvXdhOPhH5cd3jcnkO4m10OetLTrocAiuN0KdWmHc21vI3HwyueWgCyBcXvxW2cG87wB5TbBDRuYAz57+fvDGR67U+vHuG0unP+5KxFaH/+tL/16NhWuLdp86W2tlU1jhRksJton/UoczKp7HrfYpgZBVh6tLswRexnWYQ+UfReOdE3/VT6L6VU73zhwdUY33dGaXWdf3BePfS5St7VOWMe09dbm6WDKme3hBi30LXQ2D/9Gy8Z84/6+i1URAjHc/K2rdYtc1Jvcpi5l4TH9Uo6l86uRzCMiQCjQ4n7iNdX0dfen7O213W4JnQePGp+5GQ8dLZSkV1jWo8nktQlufYmXBihO4nypXz26I5Mr74a0ddsA+fjxRfyDz5ZR37I/YeWXTBd1nMez1Yx9qnLn+1z7WzZaxtwoM6aKI8kaFTR+w9FbpvaqKxJcpMl62OM4q9SsgoHczv6lUULXnGch2nmqCiyWs6DfgOYnfDq6a6VotkqaYqk0B15Wh7L6TVlvPLOP+ryzO5tu26rts0sRVRm27Qs/F92dTim6JoZG0kKr7jGl1q+d2d413ZFKIZZyUWYJHBw1i7HymmDtomjojU14O27J/6ciOewTNRvbsGmoSGhm6zlnPr7q6NskcpK8qsdPz91JXdZlj24Qr9yvlPuJkLFGxxp89cWAG/aHc4IsKuiqCrxL0OSQrZA7GfDm377Kc+3YwxjrxQl3kdcb7Kun7WMfyucfSrtXRv0XOryHu0dGibFvu8j7HggWJf67svEHo3X7qI7sEogOOuZEDRVYObAJE3do86mbnp+SxTexGBYr8d0n75T327oYBY9U6IPdBdb1rk0ild7BhCJE0xFSD2pU5yDoI+ppKy1ier9nqPeibydcMiv9ohcqcW/jLl+VpQYhqh50THXVaXTMT+3JYcbZtzAFoqqlMiV/aVUL5I3bkaxf6E0LsvdnnhC+PXxmrZZy0RuQw/Xpw9UCdqRSHhuNxHxJOa3v25xzO6Rej9YO7sG1NeA2ok00xTrrxacRnbWsodtUbkG8+x6Y5+116FNng7CD3hy359oS5sF5qMIV90nJlT5DO14iGZX9si8ra8f5nwq4pQLvWQfx8M8Rl96vsNeqQf2oeM+SXE9rEuK5AgA02rRG5IyXXc5YAdhN4/sVdiEpfwWwpBaXLLr+o9jCOvq1WWHKEj9CYbn4hJgmlSTAAV7ke0m29CxrGe+yiBuCvkvKdti/BC6Ai96QY4UrFPa/j5qv74e0auni2uS1dz1lWE3h8GVR+9mqD7IGIrhpxr8LeUOwILg6ymqiJpIlVULGu14ogcELqn2Kvll0VHLvn1eqlOCrjuYa78eenKS965S9dMuqZ9FC4gQQUAQv9V8Mvyz7KBiir7BH7d0Wwoa1pVu/jEI/gVnTWu1rhzI7P3d11Pd+SZ2uv3oYWiIvR2Ntaxil3SRtU5q17lc7/rS3imRyYcVg4QeqtFf6Sij3XvZbiQJL1Ui5/Zrn30cu+nWHOE3oVGXAXCVFsy/2OH1ZfG/NdGA18PaVOFDoO+6LOReYcnCiACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyJ/xdgAMwVvzj2w67VAAAAAElFTkSuQmCC"
                             alt="" height={85} />
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p>Never be chained to one activity</p>
                        </div>
                    </div>
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,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" 
                            alt="" height={85}/>
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p> Browse across locations</p>
                        </div>
                    </div>
                    <div className="Renting-with-Sprentzo-Sub-Grid">
                        <div className="Renting-Grid-icons">
                            <img src="data:image/png;base64,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" 
                            alt="" height={85}/>
                        </div>
                        <div className="Renting-Grid-tagline">
                            <p>Easy plug play at the venues</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}