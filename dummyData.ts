import { User, UserRole, Donation, EntertainmentVideo, CompostDonation, FeaturedRecipe } from '../types';

export let DUMMY_USERS: User[] = [
  { id: 'rec1', email: 'receiver@example.com', name: 'Alex Ray', role: UserRole.REPLATER, password: 'password' },
  { id: 'pro1', email: 'provider@example.com', name: 'Green Farms', role: UserRole.SHAREBITE, password: 'password' },
  { id: 'rep1', email: 'rep@example.com', name: 'Sam Jones', role: UserRole.LOOKLOOKER, password: 'password' },
  { id: 'admin1', email: 'admin@hb.com', name: 'Admin User', role: UserRole.ADMIN, password: 'adminhb' },
];

export const addDummyUser = (user: User) => {
    DUMMY_USERS.push(user);
}

export const removeDummyUser = (userId: string) => {
    DUMMY_USERS = DUMMY_USERS.filter(u => u.id !== userId);
}


export const DUMMY_DONATIONS: Donation[] = [
  {
    id: 'don1',
    providerId: 'pro1',
    providerName: 'Green Farms',
    foodType: 'Fresh Vegetables',
    quantity: '50 kg',
    bestBefore: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    address: '123 Farm Rd, Greenfield',
    status: 'Verified',
    qualityScore: 4,
    review: { id: 'rev1', donationId: 'don1', receiverId: 'rec1', rating: 4, comment: 'Great quality, very fresh!' },
    pickupTimeWindow: '10am - 2pm',
    storageCondition: 'Refrigerated',
  },
  {
    id: 'don2',
    providerId: 'pro1',
    providerName: 'City Bakery',
    foodType: 'Assorted Breads',
    quantity: '100 loaves',
    bestBefore: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    address: '45 Bake St, Metro City',
    status: 'Pending',
    pickupTimeWindow: '2pm - 5pm',
    storageCondition: 'Dry Storage',
  },
  {
    id: 'don3',
    providerId: 'pro2',
    providerName: 'Dairy Best',
    foodType: 'Milk and Yogurt',
    quantity: '200 units',
    bestBefore: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    address: '98 Dairy Ln, Countryside',
    status: 'Distributed',
    qualityScore: 5,
    review: { id: 'rev2', donationId: 'don3', receiverId: 'rec2', rating: 5, comment: 'Excellent and very helpful for our community.' },
    pickupTimeWindow: '9am - 11am',
    storageCondition: 'Refrigerated',
  },
];

export const DUMMY_COMPOST_DONATIONS: CompostDonation[] = [
  {
    id: 'compost1',
    providerId: 'pro1',
    providerName: 'Green Farms',
    foodType: 'Vegetable Peels and Scraps',
    quantity: '2 buckets',
    address: '123 Farm Rd, Greenfield',
    status: 'Verified',
    imageUrl: 'https://images.unsplash.com/photo-1593113646773-462a04a45a27?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'compost2',
    providerId: 'pro1',
    providerName: 'City Bakery',
    foodType: 'Coffee Grounds and Eggshells',
    quantity: '10 kg',
    address: '45 Bake St, Metro City',
    status: 'Pending',
    imageUrl: 'https://images.unsplash.com/photo-1551030173-1a2a4a2a3c7a?q=80&w=800&auto=format&fit=crop',
  }
];

export let DUMMY_VIDEOS: EntertainmentVideo[] = [
    { id: 'vid1', title: '5-Minute Healthy Breakfast', thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop', url: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4' },
    { id: 'vid2', title: 'Penna Pasta', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PghsvzgJsDlrcQPs6wVrWEaVmSbJKYuTzg&s', url: 'https://videos.pexels.com/video-files/852399/852399-hd_1280_720_25fps.mp4' },
    { id: 'vid3', title: 'Zero-Waste Kitchen Hacks', thumbnail: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop', url: 'https://videos.pexels.com/video-files/4490799/4490799-hd_1280_720_25fps.mp4' },
    { id: 'vid4', title: 'Burger', thumbnail: 'data:image/jpeg;base64,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', url: 'https://videos.pexels.com/video-files/5698851/5698851-hd_1280_720_24fps.mp4' },
    { id: 'vid5', title: 'How to Store Vegetables', thumbnail: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?q=80&w=600&auto=format&fit=crop', url: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4' },
    { id: 'vid6', title: 'Biryani', thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGRoaFxgYGBofGhgYGB0YHRoaHyEeHyggHR0lHRgdITEhJSkrLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0mHyUvKystLSsvLy01Ly44Ly8tLS0wNS0tMC0rKy0tLS0yLS0tLTctLS0vLi0tLS0tLystLf/AABEIAPUAzgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAQIDBAUHAAj/xAA/EAACAQMDAgQEAgkDAgcBAQABAhEAAyEEEjEFQQYTIlEyYXGBQpEHFCNiobHB0fAzUuFyghVDkqKywvGjJP/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAwEQACAgEDAQUHBAMBAAAAAAABAgARAxIhMUEEIlFh8BMycYGRobHB0eHxM0JSFP/aAAwDAQACEQMRAD8A5yHzA/jSOKjUmnOxq0iNAFIRSuZzimE1EI9KRqaDTjRCezTY96eopY+59qIRkmkY+9aNnouoOfIcD3YFR+bQKeOh3p/B9nU/yJqhyoOTGDDkPAMyojmmlq3W8NXgJbYBHO7A/hTG8MXx+CfnP9wKr7fH4y3sMnhMWaQt2rRbo16Y8sk/Iiql3S3E+JGX6qR/OrrkVuCJRsbryDI9s/KkuD2pQpFMb51aUj1p9QE1Lv7UQjyRSTSGmQaIR4pCBTVanTRCK1Rg04Ca8U70QngaQ05TXoohLRpjGk8yvLcqYRCO9RkU4tNEPS/CrsFuX2Nm22VULN64PdUJEL++5A+tVZgBZllUsaEwEtMxAAJJwAMkn5DvW/o/CN0x5xFn90+q5/6Fyv8A3laKdGLdhdtlBbxkq03G/wCu7AP/AGoFH1ppuSIGB7DA/hzWV+0+E1J2cdZT0/QdMmNu8+9wk/8AsQgD7savWQEwp2j2QLbH/wDMAn7k0wWyTn+FWLVmkFi3McAF4kQRZnas++0En6k1eslj8vpH9qRXAIXaST3AwB8zx9qvW4nIj68VEgyFtPuwy7h7HI/I1ZsEqABgDge1N6lrUsBGfAcwn7x+UVR03iKyzhNyh2+FSYJ/ODVpFX0mq7nuob3kDj+v0pLujsuu021g8hcA/biqem6sWs+a1l1/aNbKGC25JLYGCABMg1cAs31BgMO3y+ncfao2Y1zJ3XfiYeu8F2HHoAU/T+o/saFuq+BL9uWtjeB/nb+orpNnSBAArMY7sxJ/M5qa27CmLqXgn8yjENyAftOD3rLIYdCD86hLV3DqvR7GoEXEEn8S4I+fzrnfiPwTcsy9v1p/L+3+Zp65v+vr64iWw/8AP09cwWYgmQIFKXqJpBgiPlXpmnxEmFNKxxTENLvokRymvbvlXt1N25ohFakmvRNOAokyYJUmj0bXXW3bUs7GFVQSST2FTaLRXL1xLVtCzuYUDkn+gjJPaKN+n6W3pUa3abcxEXr4Px+9u0fw2hwX5f5CKXkyBBL48ZcyHpnRLWkhjsu6gctAa1ZI5CDi7dH+4+hSO5FS37zElpJLGWJMsx92Pf8AkKiuX59KiAMew+3sKs2kisDuzczeqhRQkVpC2TVy1bpBZ7iryaE3LUpukGGjkd1IgiR7ilsQBckmQbI5xT947UnVNENwuALtQ27IAmZIncWPecTTtb1DTacEM9u5dCyENwKv03HE/WKoM6njeGkmRafqam6bWQwg5HIPcfQjvRh0/RbZLxkDb3ktIH1rn/TOuEMb7Kj3LgFu3a05LEKCSQWAK5yTPZfrRT0m/YkXbvlq8QETddK5BAYhcEGMCAIoyZP9Zb2W1zevpG2wybtyncF2xJ7iT+EQOIM1iabwvolYN5Chw0ggrMjMSOBHYR95rY1QcJPnIgZILqsHcT6YL8iPw4zWJoGuadQL1yZcA3CCPSeN0YLcgGYxyaxPrvw+nr+4xFFTU1Wht3Fa36bblmZCMw5thSTk/h5jt96AdNrbmmuLYZQBbTd6c7gTBYse0iOwFFTWjbf9ZF26zsCIdotpu+IhSMmDg9vzmn1xyBZu23XdeGwqFBBRTcZIxiMgkQM1OPOVbbf1t6qWOIkVLljqdsgHcBJA+54q/GJrjmv601/UTZQINuwiSQ/PqiBBz8+BR/4U1l1EuJfMrZ2gtM8wI/Pv9a6Yy6f8m1zK2IcrN67dC9nI/wCi4SPoQpn/ADNMs65XbaEu/MtadR9JYCtCxdDiVII+VSXtGDBYQcwZgx3pos8Rew5gb4n8GW9QC1sBbnb2P9v5VyzqPT7lhylxSp+lfQvlf5FZXiDw9b1VsqwAbs396srFOOPD9pVlD8/X95wRppVOK0ev9FuaW4UcGAcH/P8ADWWrfKtSsGFiZWUqaMlmKW2/zqLdTkqZElNKhqMNTwtTCdM03Txo7Ztj/XcRqHn4FOf1dT27byPkvvWbf1HYfQfP2qzqbwyoOf8AP41Sa4B9a5rMWNmdJVCihLNsxVm03E8mse/q1QbmNV/Dt17964w3FRHp9uw+meT9Kq3dUsYDvNQnRuoaW3bS0pEszKs8SXmOPmRVkjy7nKhF3OZ5LtgEewAkYrG0Ov093Yi3Lrm0wIVVQQwOE3k7TBnAog6sVVf1h0IG2ShgkEdoGO8n6Vzu1O1Egx+NKIBEHvE2rv3C1hIZ2WU252HAXeRlRn4h9MVn9M6PqEtm0UCuE3FzIWSY2hu7ScY+tXLHV03/AK0bboiKV80QGcMZdPV8a/D2EdqvdS1ylRfCs1ll3DEB1cZHJg/3FJVnUhAPr4/GaAlb8SloOgXkdbe4FTJdwfV2O1RPwgzOM7RzgUTXdMt5tu4q1v8A1NggMGmAWAkOsTgjkVDatmywvjKsBgxIRiJPuRH8pim6PrgdrxVCFBtqrKuWdg5bjlQCvq/eI5qhymtR6cwazxIesam0w8rU23gwLTsytPsQ8blYyJDyJxJoY6hpX822Bc2o1tT6y0q1sjesKSBmcZA3GjP9TW+ubPrCiAxBJQwZxIMjtzjgVi6LQ/q4e5cV1ZA7Ihn1W23RO32MSeflTFfI25G/r1UF0KPhMbxD0rWalPM3WktkmSG9RCmDtngzjaBzVbWaB/1fSWhcth0V0YBibm1iSIVQYHEkke3eizp/Url9bIuITht57JJm0SJmCCPpjNYj9R1Ol1LWmu2Uk+aoZP2bggmQxgkziOZzwKejbbVQ3lQdY8/0mP4V8NCyA+psQ6guJciQvB2ggHMCPf8AKjK31W2tzW2FViyuu5YBJT0wwkwwC7SR7RzNZ/UNa2pdmvMQqn02g0gNG2JUZEz+c+1ZWt1dlr7K/mi7d2+qyBKbVVZIJ5AEEj5j6wzFiWN3+PGATb4Tb1nWDbV20gUMUdtihTcDGNhCGfY+kD8XFT9I6zfuqPP3FwQQWUKQMSAABiP4xWW4SxbXZctvdG2TflbkMyrKrHzj5QOasdK6lcuFfVsQHdeuvMkDhEXjtk/kM4MGYpv084vMgPT7QvsXQwkGRUuOe1YGm1HnolzTtstK3qUgjeYACtkEEAiav2etWzcW0Ad0EsZ9MzAA9+DmtuHta5G00QfOY2xMsj8Q9Ct6u0UYZ/Cf87VwnrfSbmmuG24IyYPvH9a+jooV8deHhqbLMB6lGftPq+3f3E+wrWDoN/X94sjWNJ+X7Thc0+cfKl1ena25RhBBg/53FIlawbmQieUVOOKjpxiiENrw71S6nadVUkNuuCbSjk5gE/KSMDJmtLVLOI5oi6b0xSE81Wby9rIJhg5UggEEcCDHy+lcXJ2kYqudZceqAHWPC2ttWUvOoYFvhBLFcbgSB2wQc4I+Yret3BpbBu+WE89VGGuktAkL6sbvktE/UOrbL1vTvJUsVuMQu3ewVrfy4XP/AFVfvdNs3LW827rthVS4qmGtEyVCTycE8YFJfM2UDVx+Y5FCGW/DFzfY8y7praajb6lXuCJEYxzkdjIzFU7Goe8GOo9JQ7msMQAq7DG6D6kPdY5Gas65WFubYu+ddRGKKF321EbwN5UCWwZNUtemoCIq3POJuKjSEUraaAQxliTPJGCD7iqu1CmIB8v5kIBdiZdzqA1trYyBt1xI3iA4Yerb/tRVjNXtT0dmOxTtspaUtiM+0KBAHarWm01xbP7G1wQBJI2+w9W4wojn3GBWZ1+1cUp5wuz6lJthSCm3BnnPwwe57c0sgmqmlTXhEOmstZi7eOzjy95Df7Rjbz+7kcVe8KaO3bBNtby2iYi+bZDtn4RtkDnOJ/jQ/q9Tp7O5oDoyL5qqWKqCBncT8hlY4PsK3emdeYnaotspMWzJK7VWf9oAXERMiR7xSn1qpq/j69dZD77TSu9YvrqERrK+Vlhc80otsL6WlQPWR2Hz7U3q+osLdGpe7+GLcMQGeDuWAMg4PJzz2rL1+pJt2/OMFWYkggSpCnk8A5zVfqXWLNuwLexVjaq2yexClgTzgSC3Ge/duJ2dADvF+yAaX9H1m1sPwAswAaGClQcEzC8zgHtWd45vqz2SbQvbQzbiYaWmOxLDA9OMke1VtRd84elokQGU+kmJgfQEjmJH3oT1tu8t82rlxgbR9bsTFxR6kb6w33/Or9nQWRwR66S2QAEGa/Suou91EuPashWO1GMKXJKkCJJJ+/2re13TxacXFa2Lkks20llBIggExA94nNCvTen2L2na9cUqy3lCMoKvtOSSMqARnjtj2rL6bo9Vddri3lAC+ggxJmMyIiOZxmM0x01MdLaa5v8AErrI5F3C/wDZXLx3MCgJ3kB2Y4mOIxMySIA+VRdN6hZS/wCTaDF2DbYclTClp5+P0/eczWBqtTct2bdy24V2nCCGZWJBMlvhJXAAEAjMnGd0O7qLG67aMbB+0KhWKoPxEZGDHHFX/wDOGTc+Xzg2ajVf1Oh3Oqh2CXFfco3lH3AFogD0kksTA9XsMVL0rqTm2902VtG1hC+FBb4yRzgQfVyRXPf1i5qLjJZ8w3LhDbmOfSNxk4CzBOPkPlR10vp15NMtl3Zr1/LGFKoilSRuPLCZMT8RA4pa4ClOeYt2VhUMui6sXLamScc+/wA60GE9qGNJqBZuizIgqrJHEEcfn/SiQ31C7iYH3/h7n5CuojWtmc9hR2nJP0leH1R2e3HpAYgci2TGf+k/+0/u0ATxXd9R0veb4ZC129N0D8KogCIjexdSw/P2rinWND5F5kzHKE90OVP1jn5g0zA992V7Qn+w+cqzXgaYGmnK1aJmnV/DXRjqLwYn0oQYBNE+p0IBTYkhL7H4vwsvqY/LduEdqzPDjFrb2tNqCzEg5XYwAGVUmVnnM0TafQJuzuV1GCCQ20mc9pnv3zXnMw1ivHr+gnZU6eYP9X0z6q8u9Qlq2Juhh6g8DYFzHqkZOBHvW9c6Uluwqk5CgWy7QFMDlsSZzHyqbUXVSSrKrXPSSckED6xuyPl8jUeoU37YMM5ViBJABETv7AqQYx3n2qNII33Prf6SdR26CXNRs2jeSVIAKyNsRmO8ciZoQ654ptWiEtILhdvXtYQkRtX/AKpjA4Ck9gDneI7N22QFtc8FoCDvuhCQ8AciDOO+QTUaG9cv2hLs7sxx6dttNsx2QBScx3FaUQZLLfSQUGMDrOx9E6zbIgMBAnazSwLQTPuc88Vi+IfEthrvkM0M6wrEGJJiPf2oLs6C6qobQNy2rFtyDOctAPxDjCjI962vEPS1vKjLyJEqpkrBBJj8QPbsZ4qulbCHgx1Ad8cx/iu/5bpaYKmnvWgWOT6iCCc+2MVT0l+wDutbLlza8hcmJ3KSTkAKII77FHatDo+tsHT3Ld3JUpK3WV1Q3PTAmTCswBgmJHeqItp09HFxZD2wRcEbXYE+lSGLEn4dpgKMknMx7Me71/MhsldOsrX2XW23e4JO+GJxKgAwp4B7fWKtaudSLVs2mRFtMpZiCzgFDbMThiUGScgnjmsTonXtq2kW0druiMZkKH9MieYJrd6ncdGS3pVuXCgJZwSqqwIIAJMFRGe2T7CqgNjOnpFZe0qCNjfkJcGkvaOwS5trvdYloW2Bg3CYJ3OMBQP6xV1ui/Wmt32CvtQ2134Vxn9ptB4BJ2hmaQDgQDWTd8Vi4EF8MyxcN0RIxucKB9V25PDg1e6r11ryWBp2Fq/cO5ULKVAKMu4ED9nAYjPtjirFGBsbeflAH2ief4lZunAWyTdY+ZAY7cgCSM4AmY44IHyqxp9KqIq29rFSZUjG0qRn3Pt7Vb6CdPbtkXNTaa+qHcFvO6k5J9LHMcmB7xipen6RQrlnFzcQ42Ffi9wYOIrM7EEgn+ZoU3QHz8ZRveG3uIpB9AURv2hRHYsc8DtPHFZWt6T5HmLbuBWddhQyGdT8QIESoA3fatzqN0m35e64okM+/YVMGdsj4QT7Cs3xvrFa7bNpwSLZZjtmYJ3fTG4wRntT8Gs9ZLkDkTC8Oaa8NQNxKeguIGfLPpDKDyCDAPFF1/T3tyvYvbBZCqh3BonLADls4k845isS71i8PLtC2L4QMi3trhQl2PiJ+FQPwkwNo4ii/wAHbXsv52x1lQg9AmcB9vxBjnnsMVfMXLBroRFKF+cEtH1K++tVLqv5gkksCC27bwD+GFwfrXR7Opuu9sW9u0A73mfLgiYEQWIkfKT98fxP4V8y/a1Nm+lsqgW2CY+Dc2GaQeSSOYBxzT/DfX1vJtuqbVxQTdUghdo5YHjacY+eJ7aUcFd5nZTeoQ10o5fu38h8I/LP3Nco/Sz0bY3mqMA/+24Sf4PP/rFdVs3gRunETPyoY8UaFtXYd29KEFLawJKt8Nw98uFIHYAdzjTemjEAarHrynCKfNNZSDnnv8iKStcxzs/RNSbLWfKJ9b7bigEqF2ySfbEtP270bpeKIzO6bMsCGJhYBHbOZH5Vz8av9Vt25QXGuMVXcTG2W2rj4gAJg+9FnSsoqvtCj1sqqPWewjhUHP1ivL43K3Z5uv5ndyY7Fyh+tK+rtsT5VtSzlbqw9x/wi2JyZyfaB71d1Wqd1dbJVUTaAI5MK+Z/D6gP+01T1PT/ANYMOdjNd3W5ksqmZlcRJJMexAp+oPkD4GLRC7JYOFB9MkT74MxODUMQyUJOimFSbrt/y9O/nFv2hVFVQpN3cAPSuQozzjgH6jmk0KnaVy21lYuSbqBwFAjaMSASTj04mtHr3VVJRS+24WB7G4CnxIJnY4jDL/zQR4oe6bztbu3WcNtttL7nJ42CYI4EAQTPNPQatrN+cF2BHzkfWdY+kTQoZBtJvbaT/qMSIj5ARFa3T+uXL93/APy7bawpZXLNvuNJci2IkSJIkflUPiGy+oZhsDjO9FMvbdTDbPcHuI5U84rESdFqtMs5X1HdgsS07f8ArKXIJPua0IVyLt728W6UdXSE3i++bBW557K9xbiJaI2qSrqFfa0wApJ7bq59dN1y0bvUY2q07j7EDHcn84onuaBdTqVuXHuXQzEWlO8qqSY33GIAGJ2Jn5ijHR+GrT2We242gmTZWSzBpku47ewGJ5irjMqiq3qzDRXJlL9G+lsrbZTcLMwEW2Uj4M4XuZPNWusdHJR9Lpg0KssgPcnCAzIJM5MhQOMitXouu8p/KYFrhDNvl4hTHq5VBiZPNXNW7LqG2nY14LExykm7bEcvtgjuQzEcGkFlyrqUb+vrKMpRoDWuhWtIxu3tpAZVCglnZnEerkgAST/xQj1+/aa62604W20CVbcYMEsynnGD9K7LqekjzFbYXCBiSQMlgzIM8bT3bgkfYH8QdGOb1sOrhQxhiGcDAlVAO4EgSPpFSr6HAe4xFtTUC1vgOG3EqYAYTIDSIJAyMxP5+1FfRL6W7jKA2Y2oCD6eJweMT96yrvT9U9i75huK0AAsgQRILSAoMYnI7d6Z0XQapTduspLW1V1uqPTdUkDy8wCfVIxMqQavmxrkUi+JUCsisR/EK+q9QKiFQGdu2e8kD5+/saE9BpHu3wpMT5gdsQJESewkgfScUSnp4vOnmB7YuWmfKmVIzj2OJjnBoc6hc1drTs9ncqsZuOCo25CgAfECSZMCc0nswoaV2J8Y92Tm7+E1tR07UWEDWtQ6tthmtWiyGIOGJWMzwOPpRX4b6kDbFq+xuMQQrvsV2MeoALkLjuZMEVg6XpLnSHUatrgaz5hjAZl8vfbJbkkFwMnhY5mhrpaXNQN1++3JMyANwUkQSJON0ZiZ7kmmMlr3j9ot8i+BhfqOqu2m221JsldSu5Lbei4QyIDkkljI470PWupF7F43XAuEWVJaFYoj5SeSQYGcxHtRb1ZTqbdn9Wv21s7src3I29CDPbdt2xtxMzNCnV7+gJvMTeYsSdtsKijc8+nfJ5/gKnEuldPnKMwO82dL4x/ZpZQ2vMdZZrzbbVtJgFpMtP8AtHPfFdAs6RzpfKe55j+XBuRG4xhonFcs8IdO018ftbKOfcjOPnzXSOgM1wXQ4/ZHatpZx5e0ZEZzP8K3gDiZCevhOFeLNP5equgCATuH/eA39ax5ot/Shp9mqBHdWH3R2/8Aqy0Ig1pxm1BmXKKcidd6b1l/PW1auNtIUOWAIVicAYxAH86KNIjahkAul7ThnYSABDFVz+KRkrMY7SK5d0a841aqCvqBhsBSpAzx2+dFyW9UupZbRezaSAEUiGJmIHwme5+815840TY+E7JbIXpR84a9QXyZYKrpA2gl95YdgUEfyzVHS9aS7NvZbtsWmFMmRzJiAxP8P4L0U6tnuXL6KsEeUqNu/BcJBbud0YIGQPrQB4Y6bqXddSocsGIubz+KAdu0gREyTPemtipO7QuUTvXfI6zU1XRbqBr5i6lz1FST5p3KQwgj0mCQRJ4IqXRWDc1huB18wKfKDAgKowSi84EmDPI9qntpc/aWL7It66jeV6yAHzmQCUMQYEjB96HekFbd7SrdX9paS+L25SSVkMsz8pg+8e9LVOoPjKYldbE0uk3009931DJljuwpIGTO3JQSxMgzJEzQd4v04OuJtEw23b3hWHpI7GQeK6B1SxbtW1fVIEZ8Wts7xc5C7uADAwSRjND+n6v5+qWxstqyMzl5IDenIgCDtHHHHamYMjqCxEfkUPLfgzpKG062sm4Cp8w4a4kkGDj1LntBBo96RZTS2vIRXeAW3DafWeSZYd8wJxQva1AtpbWUKFlNwxtYiZAAJxJ9/fFetdR1CLtUlJf4WX1KCSeSYMfPH1qjZwz6xA4v9OnO8LtTds3tPtlQ16bSmCrd/MORI2jeY+XzqmmsXVG9b8pY2o1tmIYXBucI5EelptgjJMQflQsBqjdteZYgozFrhZPhcAE+nEiWkHscTis7wd1Y2Lpliy2l8t8HCKz+U6/u5g+xI960lrNVE+yFbbnkQx1fUANNqLp3pccLPBJdPTtA/CCVgz29qHenddvNdFtAQ0Brm8ztWV3bAPxEDn5j2hiHrVpHTzVP7K8yksRt2xIDGYgHCn6L86CNVaa1dVtPvu3bTI8qCSwki4sAZWDMHss0gIwNE79P0+MjH3sRB5hT128jWL5CubhtwVZIJYHAMSOGORiJrFXUWVi0Q6tcW3cdR/p29kP9Q24QTjkVvdL1lu9qGfexUqv/AJbpLDDgCSYmOffuKxH8R27O+3csQQ8vsc7bgEDdLElSIGMzjjIFW1HoL+PnLYu+pqYnhbqV67rgpZm3s8iZtqm0xzxAHb5c1P1TXhrxQssBQEQ7iWA/GQgJJJztBmMxWj4V1ul1L/sLfk3LSOYkHeXEb+Nxj8qjtaIvrGe2wNpmKluQGMxEdzCr8oPE1ZjT7ito3HjCglZX6r4h0o0j6UtcZol8MsvtAmXEgekYPb5mhjorI4COrOuw7AuCWX4Sf9q5y3P8q1jpkYlLWlZ9vou7QWnmQeST8+ZindGuqLSWrtsqy+lgUKsqzKF8Cc94mSDTC+lODICd47zZ0WsRNGunuq95JId7YG+1ztZZPqImPmCaAOraQowBaROCRBM8GMxj510bVdLi2rRPxwCTBB54Gc0K9a01s2jA9c7hn4T7Hk5zik4O1EvR8YZcQ0mpc6BqFsWizNtn0jE+psDj8/tXQOiG85EXNtpHYmVh2GCiRwqBSM8mO2aD+hdOaLTPBhl9PZTIyPc9vvXRNFaCgwOSSfmTyf8APauou5mBjQnKf0vWv2yt++w/9S2z/wDU1z6uj/piHqX/AKx/8DXNQa0Yfd+v5mfP7/yH4h51PQs1wvbZjt2BcNI4GCeSTIPOPpgt6LcvJf8A2l0kWyGY+oqIGQPnH4R7zWZptNYKrdtmdsXCSYhiDJgn0yQTnEiTmreq33Lbso9GzcYM7IPwyPiZpBick1wcmv3PDxnbxkVd7GbWt8bNb1KWkTcjjcSwG5JwD6cGMjOaHOoeI2s6m6lotde5lRnDtjbJiQMH2E/KhvrFg2mW3acG45DQMkzxEHcpnBVhj3qVtddtotu4bFpmEE21L3vu0lU+x/KmDESASb9c/wBSlqvuiWtTqtRbuX7z3F85Lbrt3p6WaBtkmGImdqzJjtVjQ6vWHThrjA2r1y1a3vEkE7t0jMekrnuRE0ml8KWXNol71xbqeYgVACwIky3mAyIzPFGi9LtXLa2/LLraZTbVmPqIDYHHAiBwKpkyom1WfhBVa7J2mN4x0ShL92691xa8sLtPrO94lZwuRyPahbT3ba622f2nq9LhGXdmVAJ4GBJMd/fgn6V0NVNwMd9wqPSxmGtSRkzEHdiBMc++X4a6M63LoS6gaSoTcN9xgO45UCaZiyIAQsNytkwj1mq220a1aNuRC5BLbSFBgdzPP50vWOr2NKxt7brXg8huFZm3KwLEyYUzjk1r+Sbgs20wqgKzZWS3qcL3xB59qx7mjN25dawu64hLlXn1hiDNsxErJEHuaFFE6Rv/AB0mXK7EUPW/WN8M2lvaXyWR3SCrPIhWBwAQdwMZBGQYil1nh03EsLcZCtsNLMv7SSfRbQkERkz39Ix3p+n6mLjJuueV5RJZF9IuP8QEcyYOJM596j6Z1dtaL6XLrIIPl3FUBQFaCTMhgCRP9OagEkgqZXUF7l7yHqaW7NzyE2i4yEQWYkQsMyzwxJkgAYmsW3pmVt+10dLil1XeVIB9IJ5C+wHP51N1DQMjjztXN4qBdUENccr8KrENsiZJPAzMirHXbpJAuXEG8sQuQHJABHPAH8e1VPIoxi2x7u1bdD4eEv2unnUXEdruxVLbltvDXIBADAGfSx3QeCPnWf4v6PsNm6qb7RChkKmVACiHHcSJ+5oU/wDEv1RlWwWS5uJO/aVHtHcHsTP51H466zdu3FdXe3auWxuVcDcZ3iR8YxOexrTiwni/hKYx7Dzl3wFqH89xaVVbYQW2g8tCgbvhg4x8ua6M9+6tzYUwpVVKj/UlSHZUBMANmSOO/Mc76T11bX7ZLNtXdVFsNuPqMFtqqACSRIk4zRH0nxTfuqNKltGvqAXvSfUpYBgcQHnJzBCkCOysoZiTVCaUYUKieGOmWn1F61dJd7NxSpDMrgS2GiPSRt+tWvF9+2bjyV3lzkGGG1uPbAx6oEHFLpmuHWLsBVSp3sDIeCIJUHleM+1Dni28o1TbBuECApncGOSTHxM0nGBNK72T7S42fea1o3dSm0fCB6T8iciT8u4odKbnKuqkoxAcerAb4QQOIx3FVup+I70lC6gKATbXv+6T+L6DHyqrb666KMBxIgmJnvEe3H1q+LszqLEh8imdI6cRFuOC4GQRMAnAOeRRbpjihPRyTYH725vkNj4+s0WWDiummwnOfczlX6YWl1H7/wDJf+a5uDR1+lzUbtSq+xc/nsA/kaBAadh936/mIz+/9PxO89O8OpcJZlhSPsxBBX6w0H7VB1vpbm42kVvSfLuRaCyrSR6hIi36SQZwTPsBa0zXiSLNwq7CBwRjjDSBWJ1DqDafVu95WcOwjcArQoA9Ld/UDg4+lc/MuwNbzbh1FqBlPrHhxy62bS7nCDbcDAftF+OWmYPP1qx0bwYti5JJuMgEgITtJnIEQe3FEd7rluyAosqqOTDW3AY7gCGUKpB3E8z/AGqv0zRMLdtbr3Blihun1tk5IAUkCQM9o4iua7ZNFA7eXr9ZuVb3Imy7JZa0ot+o7lUAkbQ3qcfTBPHahvpd7U3NTqHCutkFbYQjIC7SW3NmfWTGOI5FaGn1JGrcCGKICSwG5WeYK98rMjt6ce+V1jrqGbe8KeCCODGCYOcmMH3xS++O7V39hLBPCamvsol8ny7gK7WDgGGkjgj5T6T86m6LrLTW2vsiIUaWY7QzkAQx42zxn2igKz4xewuxlZirBxvnO1di2z+6BkEfLGKuaPrpv2nu2rW3akPYba1tralpjAaTvOCe30NaxgKWQNj9PX2ijZ2MNfDvWbWq/aqUG1mAiByGHM5IDGfrPetPqGlKWitm95ZwwZsyw7EyPSfb+fFc06Bp7raa3c0xCeVeuvtgPu8wbWTb6YIC4kzE/cj8LaLUbrl69CI1oW1sQ2WDCHO44Ykxxn7ZegUWB0mZlJIYj8RNX4lYO6nylucqmxiNw7jakMCVblsA/Kpej6pTauXLltRcYMu0bipDxxPzABiOBIECtTpPSbVwXLl0eZuLlDG07BuESM5mo/ENkB1O/wAm1l2dUUsWVQqoS0gQYaIE7cGeFNjPPj1mj2iA6alcC5fDDU2VsnbuQgymAA7EwIMw2QJ+cUG+KNdaZ7b2nDC2HS0eSzNG+77QBKhQOSv2MuoeIRpbaWS7tcAPmXdwKKRB4O4tukQI4I71xvWapnvXOZZmYzE7maTxgZmQB/KtOJVJJHzmZm00Tx0jr4LzbX1XDEEGSCeR963td4fcOj7dyfC4T/TF5RO5lGVBXOFif41NB0dvLdmUrcUoQRIYSyqQRz8Mx/zWtbS6uhf9X80BGJ1F5jDM/DIpOQiAZIiY+tSzUO6fKR/lEqaRZA3BTcIO4iOJPH07f81BauXdO4eyW8yYLZI9UwCOCTM/YVk29e0TJLH88xzVldQqNcAub9zLtcgjbBktHvmKj2ZBMehUKBDbqvVbemvBXNx7y2wrXEKqwfO+AViBjtH8KxNZdvaq3DMzOqsFwpuXEZpBYzjaCMAHg++F6d0LUXdQ147bqelluK24OZBbjIniCBzVzpiot0TZKsu3dxuUMOD8wAO+IFLNIKHxk2Cb6yDS+EbI23dTeAG0bknbgghSWJmRn4RmKyvDXRA1ze3qVDie8d/60S6/W277nT3ka1mFuPA3ZhSuSAZiAYDT24qXpWk2Bl/2yDj2rTjY1RmV+YQdKs5tzzDMfqYH9Y+1EVsxWZobcZ7x/Cp+p39llmOOwP8An5U0mhFgajOIePtV5msb91QPzlv5PQ5VjqOp8269z/cxI+nb+EVAK0oulQJlyNqYmd/0Y9a9hPPtxJp/iLW6dltXDYW+z3GW3uAlRPIwcFgDHeflUds5IiPrWodALtgTaLEElAGKy3HI4Hz7Vy8+y3OhiIDDVMTTWHtsdRkuW4AwgQ4WAIGIM/Orv6mvnON252UOpcy5VpwJ9iCIFZq+JbWjdtNfkMVYseVXdAS3uJztQAb+CQe5ihY9Se5cBZ59O0HcCyouEkgROZn3JrAcRo3NwbUYddH6UdPdLBwtu6xZkJUszEciZacDGMUBeMuqMLl61sRAQoZvwkSSYG3ncCJB/B7iK01e/qrbOi/t9Pta3emGuKJ3AiCGK4M45+tDXjjRi5bs3ZutqGtruWJUkGCff3wPr3y/s+O2Grfz5icrFQSIK6nUjgOWiIBMjGOf6USeA9YBdIbK8EEDKv6WHtmeaE9OhR1YiSMweODRnY0Cpfc2vUnl2yYyAx29+PiJ+4Psa6HaABjIiOzMxyC/hCXofTgi3LNnWIbYO5JuAbLm7kqB6jgZAI5Hc1vazX6ZbiC3qAbnpLojDadobCpBbLGZJ7Ad65l1fQ27lwHgbA1zidxAAXg+rc0fKSe1Yos7Q11A4RCFfI3ZP5RIH3I+yExBxZO58o/IxQ1WwnY+pamx5SvcuNbu7msq1t2BCNDeocGSBgzWV1vrT31bM6W2yWzu5O1svM5gjn2eub3eu3DeV7Uq4ggsxbAUenOJMT+QrZ1nittSigW1s7f9YrAVyeGjBDeniOc1fJhcKK8vpMwzLqJMp3neCQA25vhCneEMweMg+/HFXvDv+tbF31qG9JZQNrfLHGQD7Vki2DpfMGN94pkSdqqCf/l+QpF0vmLuLxHfgj2/gI9+avQqMJ1bzofVte+n332X4hbYsDlQVII2k7iRtB5gVRHiS71JRorJ2C4C1+68b9gywAB4gAQOZj3oWs6t1Iuu7XASrEsZIYRtbOYCiO9W7PSmN3zVaCTLgOwxc7LtHMTiR7UgKiEs0qFobTG1/lrcZLSXWH4C4gtGdxgYEA4/OtXTdH8zy1ES/wCzYqCAbmceqMwDkY9JrY1xU2lRFClAEkmVlyWOYyF7d8AGat+HNAYVg8uH2sCDsYKSROJBEn1DP14I2axY2jExm9Rml0/pIth9PaKgMebfpaQQSJGWgquScwZqZenG3d4J3Yc4ABAXMfT/ADFSPfW3cG6d2PhPyYgz9RHzmKzNV162Q6PZILAnyywnaSQCDPpn2nE1nRWYbmMyuAdpn6zQtcuu9y6htZUlp9SgHAEZJmPcwCK1vDmlu7djsWAACluY+Z5PMZrM6HvcAMZyPUfigcAkQG+4NHHTbEdq6GPGBMDuZo2LdCv6UuqC1pSin1MNuPdufyEn6rRpaAUbjwomuEfpE65+s6kgGVSY+p/4j6EtTtNkCUDUpMFaQ16krRM0+gNOQ0TzH8v/ANrSXV+Wp5z7GD349jmhLp3WBeRbyHiN6/Lgt/H+FEtlgwxXNChu603NtvOWeKLrPcDurAxtMncIHEfKSTAAyTUXT9Ozvstjc9zAA7tBMgcR37V0XqfR1eZFDOo6RqNOS+lba0Fe07TExPBxzUti7tLGJnN7zb6V1UaO2NPqrqPdX8CGBaVQSdzAEl2k47/maENf1QdQuRdtswkm0bWbgH07ggCR8qq+H+jXmuxctOyEiWUdwe7GBE5JBnB5ou6V4da1qzeaN7KIA4Hpgkj3MflWHI+PAS3WunjHDfb8wO1liwki3ZKwhBZ53liIED8EHJ+lGPh4b1wnw2Ftm+T6XdBAtkHDZJkrkH7Vd6n4dN26LrqGQFSykQGOMfP6VPqmAZkVSjqiiwXEovmllkKgnG2CewPzNRlyl1Ao7+MaioDY5mD/AOHpdd0VEgHe7DANyFB8sR6hj6cnkxWSllnss122Bc013YyxAuWL0jYeJgiQQOACK2tN4WvWWbUPeK342sd8WyGLZ3DPlkbe3JOKwupdJvi9vvlHDMpIDMFcn0jgD1Lux9TBOadhyYwNN+usjIGY2IOdU6SbVy3cEm1eC3EkZAbO35kcGpdZ0dy2xDKGPUP4zJ7ex9q1/EN5W/V7Q3h7SNbcHu24kt7HB/iaKem+Frd8273nNhQSo2qxYSIxED08R25rX7U0N5k047IaBJ0r2UKwGQ72Ve5YKVRwOQOJqtoN3woSqlfXMZ+f8aPr/hxQTtYH4hJb1ZHBP+4HEdqHOv6NrShFCoriGIaWHvPy7TJ7/WkrlDd3rNBAG4mcl4MPSg3D0hiSPYztnaMH2rS8NaZGYg3Cs2ySC0L6SdzCMSJgDtOKf4a0Uh0RrN24APS1wjd7kQCTgQDVLUtatXGNpHdEYNIDHyjMsjEA5B+vNDLYIAka6O8JOkaVn0lsbBLkMwEYmROSJMR3okbQLZ04IKBxMM4kDuxjE4kxXOtb1u6Htm04NsFhDAbSTBIzBkfbmPeres1b6i0TcciIldw2giArAAkATgfal6SpDMOftJLFhQMuXNSumO0OrgHJ3DcfYjsx/wA7Vj9R1m655gRgGIFy5AkJOIHeKtdP6I7GQuJyzDn6A5NGOj6GsbSAQQQfoaeuMDeIbJ0lbw5pcKRBByCPbt8uKLbL7YGxvsP7UOeFrJ01xtLcM53Wie6nMf8AHyNE3UNSumttfuGMen+/9qYCZRgL3g3+knxIumsmyDLmdw/p9Mx9n9q4cbhJJOSSST7k960vEnWW1V9rhOJMD5f5/mayq141oWZkyNew4ik0lLNeAq8XN3ofVm0z7hOw4YfmPyzn/wDI6h4f6kroHQ+k8/ut/Ue1cc+Vanh/rb6RwQZtn4l5AnnHtWfPhvvLzNGHKPdadr0Gq8xWkAOrMCoM9/Sf+5SG+9WrNobgY+xFYHRdbauxetkH0wc5C8/cSMTxnjNb9lw2QR9qUrahRjHTSdpgdYtX71zaALdsAY5zJOII+WYpfCNxLbFLtzddLny2utIEmXAGJIJMsZ5AxBol2jvUNzQoSDtUnsYE/nSl7MqCh94FyeZJ1XrNkMUXazLMyRCR/Ig9zWM18v5aPcON27yl3MUBBZd3AU/KDyBxTepdCV8hVkTG5QQD2MHBzmmdO0zWQGKkussFUwpZlK+rgECZ+wxIFKydnbI1sdvCMTIEG0yk8W2r1pggghyLMY9HDXFESqxwCCZaTFV9Hr0Fo2dbF3du2Na9QKORuVhAKuuGDRmIxWrpNGtqypfy0ZVJuEhQrR3b/auZj3FC+r11txtLJauwCCMKVJwV9pPv71krS5Crt9fXnNYoqLMk0vSEtA3mIuiRgH1SeAe8zWh0tme8bi29lsLuuN3/AGayFBwRJ5/pVbpPUXZX05tbyu1wyqoCkTLMzNkzjjtIjtb/APDdRZ07EPbVMhvi3euC2SPVgEY9+9M713UynAoYvcTW6zy9Mr6gI/mO5/Zn0hCskGeH3GT/AMUl+7ZfYw06i2yA75O2265dNo+Kcn+/bLv6C7fNi2isQgG8ZO0M2GaTtke4zk8xV3xFbtoptrfFsBld7jEEmF2sAoyZEQPqaCgqx1/qPDVBrxBqgmqP6udqgoQwPo8yAxZORgnMYw3uae+u1+qQou0r6g621EbiT6jGTPMitIdJUhCPMd7inNwQVSfbszUQ9L6AqwYzW7GLAscTNkffYzOseGA622YHYFA8uANlwDIwO/Imt7Q+H7a8IPyGa19PosbZKr3jE5n+daFpPbFNUeIiS0p6fp+3/Bir9uwFipAsV53Cjcxgfz/oBV+JXcytrNFa9N+6P9EkqAY3HmJ9sAn6Vx/9I/jJtW/lWz+zXmO5Hb6DP+TV39Ivjs3SbFhvTwzD+Q/z+w5vPzqyJe8h3raKKSKSlBp0RFAp4pteohLVeBimk0k1aRLvSerXdK4e0fqtdT8M+KrWpiGCXAPUp4P9v5Vx1q9adlYMrFWHBBg0jJhDbjmaMefTs3E+jbN/scGra1x/w3+kFre23qRKcbwOB8wMj7flXSum9VtXlD2biup4z/D6/Lmkbrs0fs26zW+1VrI/bXEORtV1+8qw+xUH/uqVbvuIqjrr4TVabMBxdtn6wrL/APA/nRcAvSVOp9NOoY28iyuGjm4/+2eyjvHJx2Mjmu8CIRAYx7ECP4D8qO+ltcNsG6qq5LEhZgSxjnvEE/OpluIzMgZSyxuUESu7IkciR71OkHeUJ3gLpNA2nW5tiBbRVn3tqAe0ScxPyqK31TU6nV2tLcQeQ8OpESygHYSJPDLmD70aa/SKyFWWQcEDBPyBx9KGvCembzPMFgWwshfSkr/N+/BiNx5rMwGreOQGi0enU7dsqtq211i5JIlQBbaAN3BByY7zFWmtgm4LOnA3knc6xDiBvEzIKnCwMr862dNo1tqAIAAjNWfKpuPGAItnmVpelKsTk9yeSfer9uxFSM+0xsMR8Qg/wmfyFNbUjtz7QRPyEj/Jp1gRdEx6L+Z/z+X8qlNVtTf9EsdnfJEgj37fxoL8R/pFtWRttw9yMhZIB+uP6fejVvQk6drhl1HqVvToXuMAB7/5n6Vx/wAbePrmpJt2SVtcE92/4/z50M9c69e1b7rrE+y9gKy5pi4+rRTZOixZpaQilFNip5acG5FItPC0QjQKftpRXpqYR9KRSUlTIiNSU6KbRCI1O0mruWW323ZG91Mfn2NMemmoIB2MkEjcQ66L+k6/aAW9bW6vuvpb8sqftFbHUvGmj1dpSHNm/aYXLW4EAsv4TEiDxzXK6Q0lsKniPTtDLzPofoHiexqUDI4DY3I3Kk/zHORWzavLkjbJ5IIkxxPvXy8DHGPpVyx1fUJ8N+4Po5qpxN0Mt7VDyJ9JaiHEFZ/zGfemqkwSgkdyBP5189W/E+sHGoufnVlPGetH/nsfqBSv/O12fX2l/brVD195330xlF/IVFe1yJO9kUfMiuBX/FWrcQb7x7Ams29rrjfE7H7/ANqYMTRZyrO5dR8a6S1M3NxHYcfY8UJ9U/SmcixbA5yc/wAcfyNcwNeq4w+JlDl8BNnq/ifU6j47hA9gT/n5RWNS0lNCgcRZYnmepQK9Sk1MiJFLXgaWiEUU+famqKlYDtRCN5r0V4CKlFzHFEIyvE5+lJXqmRHpxUZFer1EIxqSKWvVEmJGKaRXq9RCJSV6vUQi0hNer1EIopVr1eohEFeFer1EItJFer1EJ4U6vV6iE8a8KWvUQjg1SW+K9XqIRSeaRzXq9RCf/9k=', url: 'https://videos.pexels.com/video-files/6981613/6981613-hd_1280_720_25fps.mp4' },
];

export const addDummyVideo = (video: EntertainmentVideo) => {
    DUMMY_VIDEOS.unshift(video);
}

export const removeDummyVideo = (videoId: string) => {
    DUMMY_VIDEOS = DUMMY_VIDEOS.filter(v => v.id !== videoId);
}

export const DUMMY_FEATURED_RECIPES: FeaturedRecipe[] = [
  {
    id: 'feat1',
    name: 'Paneer Butter Masala',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    ingredients: [
      '250g Paneer, cubed',
      '2 large onions, finely chopped',
      '3 large tomatoes, pureed',
      '1 tbsp Ginger-garlic paste',
      '50g Butter',
      '1/4 cup Cashew nuts, soaked',
      '1 tsp Red chili powder',
      '1/2 tsp Turmeric powder',
      '1 tsp Garam masala',
      '1/4 cup Fresh cream',
      'Salt to taste',
      '1 tbsp Kasuri Methi (dried fenugreek leaves)',
    ],
    instructions: [
      'Heat butter in a pan, add chopped onions and saute until golden brown.',
      'Add ginger-garlic paste and cook for another minute.',
      'Add tomato puree, red chili powder, turmeric powder, and salt. Cook until the oil separates.',
      'Make a paste of the soaked cashew nuts and add it to the pan. Cook for 5 minutes.',
      'Add 1 cup of water, garam masala, and bring to a boil.',
      'Add paneer cubes and crushed Kasuri Methi. Simmer for 5-7 minutes.',
      'Stir in fresh cream and serve hot.',
    ],
  },
  {
    id: 'feat2',
    name: 'Masala Dosa',
    imageUrl: 'https://img.freepik.com/premium-photo/cheese-masala-dosa-recipe-with-sambar-chutney-selective-focus_466689-36128.jpg?semt=ais_hybrid&w=740&q=80',
    ingredients: [
      '2 cups Dosa rice',
      '1/2 cup Urad dal',
      '1/4 tsp Fenugreek seeds',
      '4 medium potatoes, boiled and mashed',
      '1 large onion, sliced',
      '2 green chilies, chopped',
      '1/2 inch ginger, grated',
      '1 tsp Mustard seeds',
      '1/2 tsp Turmeric powder',
      'A few curry leaves',
      'Oil or ghee for cooking',
      'Salt to taste',
    ],
    instructions: [
      'Soak rice, urad dal, and fenugreek seeds for 4-6 hours. Grind to a smooth batter and ferment overnight.',
      'For the filling: Heat oil, add mustard seeds, curry leaves, green chilies, and ginger.',
      'Add sliced onions and saute until translucent. Add turmeric powder and salt.',
      'Add mashed potatoes and mix well. Your potato masala is ready.',
      'Heat a tawa (griddle), pour a ladle of dosa batter and spread it in a circular motion.',
      'Drizzle some oil or ghee. When the dosa is golden brown, place the potato masala in the center and fold.',
      'Serve hot with chutney and sambar.',
    ],
  },
  {
    id: 'feat3',
    name: 'Chicken Biryani',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg',
    ingredients: [
      '500g Chicken, cut into pieces',
      '2 cups Basmati rice, soaked for 30 mins',
      '2 large onions, thinly sliced',
      '1 cup Yogurt',
      '2 tbsp Ginger-garlic paste',
      '1 tsp Red chili powder',
      '1/2 tsp Turmeric powder',
      '1 tsp Garam masala',
      'Mint and Coriander leaves',
      'Whole spices (cinnamon, cloves, cardamom)',
      'Saffron soaked in milk',
      'Ghee/Oil',
    ],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, chili powder, turmeric, garam masala, and salt for at least 1 hour.',
      'Fry sliced onions until golden brown (birista). Keep half aside.',
      'In a heavy-bottomed pan, add marinated chicken and half the fried onions. Cook for 10-15 minutes.',
      'Parboil the soaked rice with whole spices and salt until 70% cooked. Drain the water.',
      'Layer the parboiled rice over the chicken. Garnish with remaining fried onions, mint, coriander, and saffron milk.',
      'Cover and cook on low heat (dum) for 20-25 minutes.',
      'Gently fluff the biryani and serve.',
    ],
  },
    {
    id: 'feat4',
    name: 'Aloo Gobi',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_813YLzm0mEd7_KC90QwEtu9eiN5T-nNC8A&s',
    ingredients: [
        '1 medium cauliflower, cut into florets',
        '2 medium potatoes, cubed',
        '1 large onion, chopped',
        '2 tomatoes, chopped',
        '1 tsp Ginger paste',
        '1 tsp Cumin seeds',
        '1/2 tsp Turmeric powder',
        '1 tsp Coriander powder',
        '1/2 tsp Red chili powder',
        'Garam masala to taste',
        'Oil',
        'Salt to taste',
    ],
    instructions: [
        'Heat oil in a pan, add cumin seeds. Once they splutter, add onions and saute until golden.',
        'Add ginger paste and cook for a minute.',
        'Add chopped tomatoes, turmeric, coriander, chili powder, and salt. Cook until tomatoes are soft.',
        'Add potatoes and cauliflower. Mix well to coat with the masala.',
        'Cover and cook on low heat for 15-20 minutes, stirring occasionally, until vegetables are tender.',
        'Sprinkle with garam masala and garnish with fresh coriander leaves.',
        'Serve hot with rotis or naan.',
    ],
  },
  {
    id: 'feat5',
    name: 'Dal Tadka',
    imageUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg',
    ingredients: [
      '1 cup Toor dal (pigeon pea lentils)',
      '1/2 tsp Turmeric powder',
      'Salt to taste',
      'For Tadka (tempering):',
      '2 tbsp Ghee',
      '1 tsp Cumin seeds',
      '2-3 dried red chilies',
      '1 small onion, finely chopped',
      '1 tsp grated garlic',
      '1/4 tsp Asafoetida (hing)',
    ],
    instructions: [
      'Pressure cook the toor dal with turmeric powder, salt, and 3 cups of water for 3-4 whistles.',
      'Once the pressure settles, open the cooker and whisk the dal until smooth.',
      'For the tadka, heat ghee in a small pan. Add cumin seeds and dried red chilies.',
      'When the seeds crackle, add asafoetida, garlic, and chopped onions. Saute until onions are golden brown.',
      'Pour this tempering over the cooked dal.',
      'Mix well and simmer for 2 minutes.',
      'Garnish with coriander and serve hot.',
    ],
  },
  {
    id: 'feat6',
    name: 'Chole Bhature',
    imageUrl: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop',
    ingredients: [
      'For Chole: 1 cup chickpeas (chana), soaked overnight',
      'For Bhature: 2 cups all-purpose flour (maida), 1/2 cup yogurt, 1 tsp sugar, oil for frying',
      '2 onions, pureed',
      '2 tomatoes, pureed',
      '1 tbsp Chana masala powder',
      '1 tsp Ginger-garlic paste',
      '1 black tea bag (for color)',
    ],
    instructions: [
      'Boil soaked chickpeas with a tea bag and salt until soft. Remove the tea bag.',
      'Heat oil, saute onion puree until brown. Add ginger-garlic paste and tomato puree. Cook until oil separates.',
      'Add chana masala powder, red chili powder, and turmeric. Add the boiled chickpeas and simmer for 15 minutes.',
      'For bhature, mix flour, yogurt, sugar, salt, and a little water to make a soft dough. Let it rest for 2 hours.',
      'Roll out small portions of the dough into circles and deep fry in hot oil until they puff up and are golden brown.',
      'Serve chole hot with bhature.',
    ],
  },
];