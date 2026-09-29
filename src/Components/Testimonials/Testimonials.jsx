import React from 'react';
import dp from '../Assets/dp.jpg';
import dp2 from '../Assets/dp2.jpg';
import dp3 from '../Assets/dp3.jpg';

const testimonials = [
  ['Amazing Analysis', 'I enrolled into PXC Academy with minimal knowledge of Forex trading and can confidently say I have learnt a lot. I appreciate the professionalism and approachability of the team.', 'Odibo Efe.', dp],
  ['A Solid Platform', 'One thing I enjoy about PXC is the focus on providing traders with useful resources and support. The platform and educational content have been valuable to my trading journey.', 'Festus Dan.', dp2],
  ['Great Experience', 'I have had a positive experience with PXC. The educational resources and customer support have helped me better understand important market trends.', 'Marry Jane.', dp3],
];

const Testimonials = () => (
  <section className="section-space bg-white">
    <div className="page-container">
      <div className="text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">What our students say</h2>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map(([title, copy, name, image]) => (
          <article key={name} className="surface-card p-6">
            <h3 className="text-base font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p>
            <div className="mt-6 flex items-center gap-3">
              <img src={image} alt="" className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{name}</p>
                <p className="text-xs text-slate-500">Forex Trader</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
